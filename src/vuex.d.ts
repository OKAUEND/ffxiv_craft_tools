import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";
import { StoreLog } from "@/@types/FFXIVLogTypes";

declare module "@vue/runtime-core" {
  interface State {
    Logs: StoreLog[];
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
