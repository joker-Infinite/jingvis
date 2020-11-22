/*
* 服务区指标
* */
export default [
    {
        path: 'serviceArea',
        name: 'serviceArea',
        component: () => import(/* webpackChunkName: "serviceArea" */ '@/pages/serviceArea/serviceArea.vue'),
    },
    {
        path: 'huangGang',
        name: 'huangGang',
        component: () => import(/* webpackChunkName: "serviceArea" */ '@/pages/serviceArea/children/huangGang.vue'),
    },
    {
        path: 'enShi',
        name: 'enShi',
        component: () => import(/* webpackChunkName: "serviceArea" */ '@/pages/serviceArea/children/enShi.vue'),
    },
    {
        path: 'shiYan',
        name: 'shiYan',
        component: () => import(/* webpackChunkName: "serviceArea" */ '@/pages/serviceArea/children/shiYan.vue'),
    },
    {
        path: 'xianNing',
        name: 'xianNing',
        component: () => import(/* webpackChunkName: "serviceArea" */ '@/pages/serviceArea/children/xianNing.vue'),
    },
    {
        path: 'xiaoGan',
        name: 'xiaoGan',
        component: () => import(/* webpackChunkName: "serviceArea" */ '@/pages/serviceArea/children/xiaoGan.vue'),
    },
    {
        path: 'yiChang',
        name: 'yiChang',
        component: () => import(/* webpackChunkName: "serviceArea" */ '@/pages/serviceArea/children/yiChang.vue'),
    },
]