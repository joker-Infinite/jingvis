/*
 * 传媒指标
 * */
export default [
  {
    path: "media",
    name: "media",
    component: () =>
      import(/* webpackChunkName: "serviceArea" */ "@/pages/media/media.vue")
  }
];
