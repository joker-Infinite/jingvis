/*
* 服务区指标
* */
export default [
    {
        path: 'serviceArea',
        name: 'serviceArea',
        component: () => import(/* webpackChunkName: "serviceArea" */ '@/pages/serviceArea/serviceArea.vue'),
    },
    // 利润
    {
        path: 'revenue',
        name: 'revenue',
        component: () => import(/* webpackChunkName: "serviceArea" */ '@/pages/serviceArea/children/revenue.vue'),
    },
    // 营收
    {
        path: 'profit',
        name: 'profit',
        component: () => import(/* webpackChunkName: "serviceArea" */ '@/pages/serviceArea/children/profit.vue'),
    },
    //成本
    {
        path: 'costing',
        name: 'costing',
        component: () => import(/* webpackChunkName: "serviceArea" */ '@/pages/serviceArea/children/costing.vue'),
    },
    //业态结构
    {
        path: 'construction',
        name: 'construction',
        component: () => import(/* webpackChunkName: "serviceArea" */ '@/pages/serviceArea/children/construction.vue'),
    },
    //服务区对比
    {
        path: 'comparison',
        name: 'comparison',
        component: () => import(/* webpackChunkName: "comparison" */ '@/pages/comparison/test.vue'),
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
    {
        path: 'FWQYeTai',
        name: 'FWQYeTai',
        component: () => import(/* webpackChunkName: "serviceArea" */ '@/pages/serviceArea/children/FWQYeTai.vue'),
    }
]