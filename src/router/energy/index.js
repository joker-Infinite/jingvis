/*
* 能源指标
* */
export default [
    {
        path: 'energy',
        name:'energy',
        component: () => import(/* webpackChunkName: "serviceArea" */ '@/pages/energy/energy.vue'),
    },
    {
        path: 'ZHJiaoTou',
        name:'ZHJiaoTou',
        component: () => import(/* webpackChunkName: "serviceArea" */ '@/pages/energy/children/ZHJiaoTou.vue'),
    },
    {
        path: 'YPLingShou',
        name:'YPLingShou',
        component: () => import(/* webpackChunkName: "serviceArea" */ '@/pages/energy/children/YPLingShou.vue'),
    },
    {
        path: 'FYPLingShou',
        name:'FYPLingShou',
        component: () => import(/* webpackChunkName: "serviceArea" */ '@/pages/energy/children/FYPLingShou.vue'),
    },
    {
        path: 'JYZXiangQing',
        name:'JYZXiangQing',
        component: () => import(/* webpackChunkName: "serviceArea" */ '@/pages/energy/children/JYZXiangQing.vue'),
    },
]