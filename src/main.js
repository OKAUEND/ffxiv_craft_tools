import Vue from "vue";
import router from "./router.js";
import Pages from "@/components/Pages/index.vue";
require("@/assets/scss/main.scss");

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(Pages)
}).$mount("#app");
