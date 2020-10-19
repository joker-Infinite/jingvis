import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home";
import test from "../pages/levelPages_two/test";

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
];

const router = new VueRouter({
  routes
});

export default router;
