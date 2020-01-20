import Vue from "vue";
import router from "./router.js";
import Pages from "@/components/Pages/index.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTimes,
  faClipboardList,
  faClipboard
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
require("@/assets/scss/main.scss");

Vue.config.productionTip = false;
library.add(faTimes, faClipboardList, faClipboard);
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  render: h => h(Pages)
}).$mount("#app");
