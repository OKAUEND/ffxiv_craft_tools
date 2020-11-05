import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import ToolsIndex from "../views/Tools/index.vue";
import AboutIndex from "../views/About/About.vue";
import ResultIndex from "../views/Result/Result.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: ToolsIndex,
  },
  {
    path: "/about",
    name: "about",
    component: AboutIndex,
  },
  {
    path: "/result",
    name: "result",
    component: ResultIndex,
    // children: [
    //   {
    //     path: "/",
    //     component: WholeDetail
    //   },
    //   {
    //     path: "IndividualDetail",
    //     component: IndividualDetail
    //   }
    // ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
