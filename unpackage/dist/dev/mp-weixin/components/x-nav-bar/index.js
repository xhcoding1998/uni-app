"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const info = common_vendor.index.getSystemInfoSync();
    const { top, bottom } = info.safeAreaInsets;
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(top) + "px"
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/myCode/moon-mall/components/x-nav-bar/index.vue"]]);
wx.createComponent(Component);
