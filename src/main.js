import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import VueAMap from "vue-amap";
import "./plugins/wyz-echarts/wyz-echarts.js";

Vue.config.productionTip = false;

Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: "5f4ec16b146bc7ebde7308bd2dbcd132",
  plugin: [
    "AMap.Autocomplete",
    "AMap.PlaceSearch",
    "AMap.Scale",
    "AMap.OverView",
    "AMap.ToolBar",
    "AMap.MapType",
    "AMap.PolyEditor",
    "AMap.CircleEditor"
  ],
  // 默认高德 sdk 版本为 1.4.4
  v: "1.4.4",
  uiVersion: "1.0.11"
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
