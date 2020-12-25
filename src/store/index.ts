import { InjectionKey } from "vue";
import { createStore, useStore as baseUsestore, Store } from "vuex";
import { LayoutState, RootState } from "./types";
import { cart } from "@/store/module/cart";

export const key: InjectionKey<Store<LayoutState & RootState>> = Symbol();

export const store = createStore({
  modules: {
    cart,
  },
});

export function useStore() {
  return baseUsestore(key);
}
