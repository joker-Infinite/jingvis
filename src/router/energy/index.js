/*
* 能源指标
* */
export default [
    {
        path: 'energy',
        name:'energy',
        component: () => import(/* webpackChunkName: "serviceArea" */ '@/pages/energy/energy.vue'),
    },
]