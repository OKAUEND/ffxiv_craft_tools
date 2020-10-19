import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";

//コンポーネントを読み込む
import ToolsIndex from "../views/Tools/index.vue";
import AboutIndex from "../views/About/About.vue";
import ResultIndex from "../views/Result/Result.vue";

// import WholeDetail from "@/components/organisms/ResultDetail/WholeDetail.vue";
// import IndividualDetail from "@/components/organisms/ResultDetail/IndividualDetail.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: ToolsIndex
  },
  {
    path: "/about",
    name: "about",
    component: AboutIndex
  },
  {
    path: "/result",
    name: "result",
    component: ResultIndex
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
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
