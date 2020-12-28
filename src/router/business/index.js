/*
 * 商业指标
 * */
export default [
  {
    path: "business",
    name: "business",
    component: () =>
      import(
        /* webpackChunkName: "serviceArea" */ "@/pages/business/business.vue"
      )
  }
];
