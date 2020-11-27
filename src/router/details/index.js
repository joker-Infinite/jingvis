/*
* 详情页
* */
export default [
      {
            path: 'details',
            name: 'details',
            component: () => import(/* webpackChunkName: "details" */ '@/pages/details/details.vue'),
      },
]