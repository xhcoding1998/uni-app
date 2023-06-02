"use strict";
const common_vendor = require("../common/vendor.js");
const useScrollConfig = (config = {}) => {
  return common_vendor.reactive({
    "scroll-y": config["scroll-y"] || false,
    "refresher-enabled": config["refresher-enabled"] || false,
    "lower-threshold": config["lower-threshold"] || 0,
    refresherrefresh: config["refresherrefresh"] || (() => {
    }),
    scrolltolower: config["scrolltolower"] || (() => {
    })
  });
};
const useCalcScrollHeight = ({ navComRef = "", tabComRef = "" } = {}) => {
  const info = common_vendor.index.getSystemInfoSync();
  info.safeAreaInsets;
  let navPosition = common_vendor.ref({});
  let tabPosition = common_vendor.ref({});
  common_vendor.onMounted(() => {
    if (navComRef) {
      const query = common_vendor.index.createSelectorQuery().in(navComRef.value);
      query.select(".nav-bar").boundingClientRect((data) => {
        navPosition.value = data;
      }).exec();
    }
    if (tabComRef) {
      const query2 = common_vendor.index.createSelectorQuery().in(tabComRef.value);
      query2.select(".footer-bar").boundingClientRect((data) => {
        tabPosition.value = data;
      }).exec();
    }
  });
  const calcHeight = common_vendor.computed(() => {
    const navValue = navComRef ? navPosition.value : { height: 0 };
    const tabValue = tabComRef ? tabPosition.value : { height: 0 };
    return navValue.height + tabValue.height;
  });
  return {
    calcHeight
  };
};
exports.useCalcScrollHeight = useCalcScrollHeight;
exports.useScrollConfig = useScrollConfig;
