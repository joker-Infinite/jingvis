/*
 * 测试页面
 * */
export default [
    {
        //服务区平面图录入
        path: "test",
        name: "test",
        component: () => import(/* webpackChunkName: "authorityManagement" */ "@/pages/test/test.vue")
    }
];