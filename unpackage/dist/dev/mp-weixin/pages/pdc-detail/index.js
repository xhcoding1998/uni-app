"use strict";
const common_vendor = require("../../common/vendor.js");
const hooks_index = require("../../hooks/index.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_x_nav_bar2 = common_vendor.resolveComponent("x-nav-bar");
  const _easycom_x_scroll2 = common_vendor.resolveComponent("x-scroll");
  (_easycom_uni_icons2 + _easycom_x_nav_bar2 + _easycom_x_scroll2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_x_nav_bar = () => "../../components/x-nav-bar/index.js";
const _easycom_x_scroll = () => "../../components/x-scroll/index.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_x_nav_bar + _easycom_x_scroll)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const info = common_vendor.index.getSystemInfoSync();
    info.safeAreaInsets;
    const scrollViewConfig = hooks_index.useScrollConfig({ "scroll-y": true });
    const { calcHeight } = hooks_index.useCalcScrollHeight();
    const toBack = () => {
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "back",
          size: "20"
        }),
        b: common_vendor.o(toBack),
        c: common_vendor.sr("navComRef", "271c45a4-0"),
        d: `calc(100vh - ${common_vendor.unref(calcHeight)}px)`,
        e: common_vendor.p({
          scrollViewConfig: common_vendor.unref(scrollViewConfig)
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-271c45a4"], ["__file", "D:/myCode/moon-mall/pages/pdc-detail/index.vue"]]);
wx.createPage(MiniProgramPage);
