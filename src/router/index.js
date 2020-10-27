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
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/test",
    name: "test",
    component: test
  },
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
  {
    path: "/three",
    name: "three",
    component: three
  },
];

const router = new VueRouter({
  routes
});

export default router;
