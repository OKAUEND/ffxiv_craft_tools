import { InjectionKey } from "vue";
import { createStore } from "vuex";
import { store as cart, CartStore } from "@/store/module/cart";
// import { CartStateTypes } from "@/store/module/cart/state";
import { StoreLog } from "@/interface/FFXIVLog.ts";

export interface RootState {
  version: string;
  cart: StoreLog[];
}

type Store = CartStore<Pick<RootState, "cart">>;

// export const key: InjectionKey<Store<LayoutState & RootState>> = Symbol();

export const store = createStore({
  modules: {
    cart,
  },
});

export function useStore(): Store {
  return store as Store;
}
