import { GetterTree } from "vuex";

import { RootState } from "@/store";
import { StoreLog } from "@/interface/FFXIVLog.ts";
import { CartStateTypes } from "./state";

export type Getters = {
  getCarts(state: CartStateTypes): StoreLog[];
};

export const getters: GetterTree<CartStateTypes, RootState> = {
  getCarts: (state) => {
    return state.cart;
  },
};
