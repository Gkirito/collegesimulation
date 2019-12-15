import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import Description from "../views/Description";
import Group from "../views/Group";
import Requirements from "../views/Requirements";
import Architecture from "../views/Architecture";
import Features from "../views/Features";
import Plan from "../views/Plan";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: Index
  },
  {
    path: "/description",
    name: "description",
    component: Description
  },
  {
    path: "/group",
    name: "group",
    component: Group
  },
  {
    path: "/requirements",
    name: "requirements",
    component: Requirements
  },
  {
    path: "/architecture",
    name: "architecture",
    component: Architecture
  },
  {
    path: "/features",
    name: "features",
    component: Features
  },
  {
    path: "/plan",
    name: "plan",
    component: Plan
  }
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
