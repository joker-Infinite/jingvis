import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home";
import test from "../pages/levelPages_two/test";
import testC from '../pages/ComparedData/test'
import compared from  '../pages/ComparedData/compared'
import three from "../pages/levelPages_three/three";

Vue.use(VueRouter);

const routes = [
  {
    //首页
    path: "/",
    name: "Home",
    component: Home
  },
  {
    //二级页面
    path: "/test",
    name: "test",
    component: test
  },
  {
    //对比页面
    path: "/testC",
    name: "test",
    component: testC
  },
  {
    //对比页面——副本
    path: "/compared",
    name: "compared",
    component: compared
  },
  {
    //三级页面
    path: "/three",
    name: "three",
    component: three
  },
];

const router = new VueRouter({
  routes
});

export default router;
