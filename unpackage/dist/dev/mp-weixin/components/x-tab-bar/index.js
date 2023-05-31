"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const info = common_vendor.index.getSystemInfoSync();
    const { top, bottom } = info.safeAreaInsets;
    const pages = getCurrentPages();
    const currentPage = pages[pages.length - 1];
    console.log(currentPage);
    const tabList = [
      { title: "首页", icon: "home", path: "/pages/index/index" },
      { title: "分类", icon: "list", path: "/pages/classification/index" },
      { title: "购物车", icon: "cart", path: "/pages/shoppingCart/index" },
      { title: "我的", icon: "person", path: "/pages/main/index" }
    ];
    const navigatorTo = (item) => {
      common_vendor.index.switchTab({
        url: item.path
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(tabList, (item, idx, i0) => {
          return {
            a: "2033f9aa-0-" + i0,
            b: common_vendor.p({
              type: item.icon,
              size: "20",
              color: "/" + common_vendor.unref(currentPage).route === item.path ? "#007aff" : ""
            }),
            c: common_vendor.t(item.title),
            d: item.icon,
            e: common_vendor.o(($event) => navigatorTo(item), item.icon)
          };
        }),
        b: common_vendor.unref(bottom) - 15 + "px"
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/myCode/moon-mall/components/x-tab-bar/index.vue"]]);
wx.createComponent(Component);
