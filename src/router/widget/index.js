/*
 * 系统插件
 * */
export default [
    {
        //服务区平面图录入
        path: "imgParameter",
        name: "imgParameter",
        component: () => import(/* webpackChunkName: "authorityManagement" */ "@/pages/widget/imgParameter.vue")
    }
];