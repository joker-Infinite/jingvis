import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home";
import test from "../pages/levelPages_two/test";
import testC from "../pages/ComparedData/test";
import compared from "../pages/ComparedData/compared";
import three from "../pages/levelPages_three/three";
import business from "../pages/serviceBusiness/business.vue";
import login from "../pages/login/login.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: login
  },
  {
    path: "/Home",
    name: "Home",
    component: Home
  },
  {
    path: "/test",
    name: "test",
    component: test
  },
  // 对比1
  {
    path: "/testC",
    name: "test",
    component: testC
  },

  {
    path: "/compared",
    name: "compared",
    component: compared
  },
  // 服务区
  {
    path: "/three",
    name: "three",
    component: three
  },
  {
    path: "/business",
    name: "business",
    component: business
  }
];

const router = new VueRouter({
  routes
});

export default router;
