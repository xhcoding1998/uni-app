"use strict";
const common_vendor = require("../../common/vendor.js");
const hooks_index = require("../../hooks/index.js");
if (!Array) {
  const _easycom_x_nav_bar2 = common_vendor.resolveComponent("x-nav-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_x_scroll2 = common_vendor.resolveComponent("x-scroll");
  const _easycom_x_tab_bar2 = common_vendor.resolveComponent("x-tab-bar");
  (_easycom_x_nav_bar2 + _easycom_uni_icons2 + _easycom_x_scroll2 + _easycom_x_tab_bar2)();
}
const _easycom_x_nav_bar = () => "../../components/x-nav-bar/index.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_x_scroll = () => "../../components/x-scroll/index.js";
const _easycom_x_tab_bar = () => "../../components/x-tab-bar/index.js";
if (!Math) {
  (_easycom_x_nav_bar + _easycom_uni_icons + _easycom_x_scroll + _easycom_x_tab_bar)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const info = common_vendor.index.getSystemInfoSync();
    info.safeAreaInsets;
    const scrollViewConfig = hooks_index.useScrollConfig({ "scroll-y": true });
    const navComRef = common_vendor.ref(null), tabComRef = common_vendor.ref(null);
    const { calcHeight } = hooks_index.useCalcScrollHeight({ navComRef, tabComRef });
    const orderTargets = [
      {
        icon: "icon-daifahuo",
        name: "待付款"
      },
      {
        icon: "icon-daifukuan",
        name: "待发货"
      },
      {
        icon: "icon-daishouhuo",
        name: "待收获"
      },
      {
        icon: "icon-jisutuikuan",
        name: "退款"
      }
    ];
    const serviceTargets = [
      {
        icon: "icon-kefu",
        name: "客服"
      },
      {
        icon: "icon-shezhi",
        name: "设置"
      },
      {
        icon: "icon-dizhiguanli",
        name: "地址管理"
      },
      {
        icon: "icon-duihuanma",
        name: "兑换码"
      },
      {
        icon: "icon-choujiang",
        name: "抽奖"
      },
      {
        icon: "icon-jifen",
        name: "积分"
      }
    ];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.sr(navComRef, "d311227b-0", {
          "k": "navComRef"
        }),
        b: common_vendor.f(orderTargets, (item, idx, i0) => {
          return {
            a: "d311227b-2-" + i0 + ",d311227b-1",
            b: common_vendor.p({
              ["custom-prefix"]: "iconfont",
              type: item.icon,
              size: "25"
            }),
            c: common_vendor.t(item.name)
          };
        }),
        c: common_vendor.f(serviceTargets, (item, idx, i0) => {
          return {
            a: "d311227b-3-" + i0 + ",d311227b-1",
            b: common_vendor.p({
              ["custom-prefix"]: "iconfont",
              type: item.icon,
              size: "25"
            }),
            c: common_vendor.t(item.name)
          };
        }),
        d: `calc(100vh - ${common_vendor.unref(calcHeight)}px)`,
        e: common_vendor.p({
          scrollViewConfig: common_vendor.unref(scrollViewConfig)
        }),
        f: common_vendor.sr(tabComRef, "d311227b-4", {
          "k": "tabComRef"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d311227b"], ["__file", "D:/myCode/moon-mall/pages/main/index.vue"]]);
wx.createPage(MiniProgramPage);
