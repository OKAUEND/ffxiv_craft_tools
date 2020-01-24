import Vue from "vue";
import Router from "vue-router";

//コンポーネントを読み込む
import ToolsIndex from "@/components/Templates/Tools/index.vue";
import AboutIndex from "@/components/Templates/About/About.vue";
import ResultIndex from "@/components/Templates/Result/Result.vue";

import WholeDetail from "@/components/organisms/ResultDetail/WholeDetail.vue";
import IndividualDetail from "@/components/organisms/ResultDetail/IndividualDetail.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
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
      component: ResultIndex,
      children: [
        {
          path: "/",
          component: WholeDetail
        },
        {
          path: "IndividualDetail",
          component: IndividualDetail
        }
      ]
    }
  ]
});
