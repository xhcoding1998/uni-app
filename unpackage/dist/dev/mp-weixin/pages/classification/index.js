"use strict";
const common_vendor = require("../../common/vendor.js");
const hooks_index = require("../../hooks/index.js");
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
    const scrollViewConfig = hooks_index.useScrollConfig({
      "scroll-y": true
    });
    const navComRef = common_vendor.ref(null), tabComRef = common_vendor.ref(null);
    const { calcHeight } = hooks_index.useCalcScrollHeight({ navComRef, tabComRef });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.sr(navComRef, "53149db2-0", {
          "k": "navComRef"
        }),
        b: common_vendor.f(20, (item, idx, i0) => {
          return {};
        }),
        c: `calc(100vh - ${common_vendor.unref(calcHeight)}px)`,
        d: common_vendor.p({
          scrollViewConfig: common_vendor.unref(scrollViewConfig)
        }),
        e: common_vendor.f(100, (item, idx, i0) => {
          return {};
        }),
        f: common_vendor.t(common_vendor.unref(calcHeight)),
        g: `calc(100vh - ${common_vendor.unref(calcHeight)}px)`,
        h: common_vendor.p({
          scrollViewConfig: common_vendor.unref(scrollViewConfig)
        }),
        i: common_vendor.sr(tabComRef, "53149db2-3", {
          "k": "tabComRef"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-53149db2"], ["__file", "D:/myCode/moon-mall/pages/classification/index.vue"]]);
wx.createPage(MiniProgramPage);
