/*
* 能源指标
* */
export default [
    {
        path: 'energy',
        name:'energy',
        component: () => import(/* webpackChunkName: "energy" */ '@/pages/energy/energy.vue'),
    },
    {
        path: 'ZHJiaoTou',
        name:'ZHJiaoTou',
        component: () => import(/* webpackChunkName: "energy" */ '@/pages/energy/children/ZHJiaoTou.vue'),
    },
    //营收 
    {
        path: 'energyrevenue',
        name: 'energyrevenue',
        component: () => import(/* webpackChunkName: "energy" */ '@/pages/energy/children/energyrevenue.vue'),
    }, 
    //利润
    
    {
        path: 'energprofit',
        name: 'energprofit',
        component: () => import(/* webpackChunkName: "energy" */ '@/pages/energy/children/energprofit.vue'),
    },
    {
        path: 'YPLingShou',
        name:'YPLingShou',
        component: () => import(/* webpackChunkName: "energy" */ '@/pages/energy/children/YPLingShou.vue'),
    },
    {
        path: 'FYPLingShou',
        name:'FYPLingShou',
        component: () => import(/* webpackChunkName: "energy" */ '@/pages/energy/children/FYPLingShou.vue'),
    },
    {
        path: 'JYZXiangQing',
        name:'JYZXiangQing',
        component: () => import(/* webpackChunkName: "energy" */ '@/pages/energy/children/JYZXiangQing.vue'),
    },
    {
        path: 'piFa',
        name:'piFa',
        component: () => import(/* webpackChunkName: "energy" */ '@/pages/energy/children/piFa.vue'),
    },
    {
        path: 'profit',
        name:'profit',
        component: () => import(/* webpackChunkName: "energy" */ '@/pages/energy/children/profit.vue'),
    },
    {
        path: 'budgetControl',
        name:'budgetControl',
        component: () => import(/* webpackChunkName: "energy" */ '@/pages/energy/children/budgetControl.vue'),
    },
    {
        path: 'wholesale',
        name:'wholesale',
        component: () => import(/* webpackChunkName: "energy" */ '@/pages/energy/children/wholesale.vue'),
    },
]