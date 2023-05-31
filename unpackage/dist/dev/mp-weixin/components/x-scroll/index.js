"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  props: ["scrollViewConfig"],
  setup(__props) {
    const props = __props;
    const scrollViewConfig = common_vendor.toRef(props, "scrollViewConfig");
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(scrollViewConfig)["scroll-y"],
        b: common_vendor.unref(scrollViewConfig)["refresher-enabled"],
        c: common_vendor.unref(scrollViewConfig)["refresher-triggered"],
        d: common_vendor.unref(scrollViewConfig)["lower-threshold"],
        e: common_vendor.o((...args) => common_vendor.unref(scrollViewConfig)["refresherrefresh"] && common_vendor.unref(scrollViewConfig)["refresherrefresh"](...args)),
        f: common_vendor.o((...args) => common_vendor.unref(scrollViewConfig)["scrolltolower"] && common_vendor.unref(scrollViewConfig)["scrolltolower"](...args))
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/myCode/moon-mall/components/x-scroll/index.vue"]]);
wx.createComponent(Component);
