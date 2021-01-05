import { GetterTree } from "vuex";

import { RootState } from "@/store";
import { StoreLog } from "@/utile/FFXIVLogTypes";
import { CartStateTypes } from "./state";

export type Getters = {
  getCarts(state: CartStateTypes): StoreLog[];
};

export const getters: GetterTree<CartStateTypes, RootState> & Getters = {
  getCarts: (state) => {
    return state.cart;
  },
};
