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
    const { top, bottom } = info.safeAreaInsets;
    const scrollViewConfig = common_vendor.reactive({
      "scroll-y": true,
      "refresher-enabled": true,
      "lower-threshold": false,
      refresherrefresh: (e) => {
        scrollViewConfig["refresher-triggered"] = true;
        setTimeout(() => {
          scrollViewConfig["refresher-triggered"] = false;
        }, 3e3);
      },
      scrolltolower: (e) => {
        console.log("3213123123123");
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(100, (i, k0, i0) => {
          return {};
        }),
        b: `calc(100vh - ${common_vendor.unref(top) + common_vendor.unref(bottom) + 47 * 2}px)`,
        c: common_vendor.p({
          scrollViewConfig
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/myCode/moon-mall/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
