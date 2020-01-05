import Vue from "vue";
import router from "./router.js";
import Pages from "@/components/Pages/index.vue";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(Pages)
}).$mount("#app");
