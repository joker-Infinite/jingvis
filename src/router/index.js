import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home";
import modules from "./modules";

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};

let routeModules = [];
for (let moduleName in modules) {
    let module = modules[moduleName];
    let res = [];
    if (module instanceof Array) {
        res = module;
    } else {
        res = module.res;
    }

    res.forEach(item => {
        routeModules.push({
            path: '/' + moduleName + '/' + item.path,
            component: item.component,
            ...(item.children ? {children: item.children} : {})
        })
    })
}

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {title: '首页'},
        children: [
            ...routeModules
        ]
    },
];

const router = new VueRouter({
    routes
});

export default router;
