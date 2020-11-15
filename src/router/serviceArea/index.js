/*
* 服务区指标
* */
export default [
    {
        path: 'serviceArea',
        name:'serviceArea',
        component: () => import(/* webpackChunkName: "serviceArea" */ '@/pages/serviceArea/serviceArea.vue'),
    },
    {
        path: 'huangGang',
        name:'huangGang',
        component: () => import(/* webpackChunkName: "serviceArea" */ '@/pages/serviceArea/children/huangGang.vue'),
    }
]