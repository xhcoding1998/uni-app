"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_x_nav_bar2 = common_vendor.resolveComponent("x-nav-bar");
  const _easycom_x_scroll2 = common_vendor.resolveComponent("x-scroll");
  const _easycom_x_tab_bar2 = common_vendor.resolveComponent("x-tab-bar");
  (_easycom_x_nav_bar2 + _easycom_x_scroll2 + _easycom_x_tab_bar2)();
}
const _easycom_x_nav_bar = () => "../../components/x-nav-bar/index.js";
const _easycom_x_scroll = () => "../../components/x-scroll/index.js";
const _easycom_x_tab_bar = () => "../../components/x-tab-bar/index.js";
if (!Math) {
  (_easycom_x_nav_bar + _easycom_x_scroll + _easycom_x_tab_bar)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const info = common_vendor.index.getSystemInfoSync();
    info.safeAreaInsets;
    const scrollViewConfig = common_vendor.reactive({
      "scroll-y": true,
      "refresher-enabled": true,
      "lower-threshold": false,
      "lower-threshold": 100,
      refresherrefresh: (e) => {
        scrollViewConfig["refresher-triggered"] = true;
        setTimeout(() => {
          scrollViewConfig["refresher-triggered"] = false;
        }, 3e3);
      },
      scrolltolower: (e) => {
        console.log("距离底部小于100px");
      }
    });
    const navComRef = common_vendor.ref(null);
    const tabComRef = common_vendor.ref(null);
    let navPosition = common_vendor.ref({});
    let tabPosition = common_vendor.ref({});
    common_vendor.onMounted(() => {
      const query = common_vendor.index.createSelectorQuery().in(navComRef.value);
      query.select(".nav-bar").boundingClientRect((data) => {
        navPosition.value = data;
      }).exec();
      const query2 = common_vendor.index.createSelectorQuery().in(tabComRef.value);
      query2.select(".footer-bar").boundingClientRect((data) => {
        tabPosition.value = data;
      }).exec();
    });
    const calcHeight = common_vendor.computed(() => {
      return navPosition.value.height + tabPosition.value.height;
    });
    console.log(calcHeight);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.sr(navComRef, "d311227b-0", {
          "k": "navComRef"
        }),
        b: common_vendor.f(100, (i, k0, i0) => {
          return {};
        }),
        c: common_vendor.t(common_vendor.unref(calcHeight)),
        d: `calc(100vh - ${common_vendor.unref(calcHeight)}px)`,
        e: common_vendor.p({
          scrollViewConfig
        }),
        f: common_vendor.sr(tabComRef, "d311227b-2", {
          "k": "tabComRef"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d311227b"], ["__file", "D:/myCode/moon-mall/pages/main/index.vue"]]);
wx.createPage(MiniProgramPage);
