import { MutationTree } from "vuex";

import { CartMutationTypes } from "./mutation-type";
import { StoreLog } from "@/interface/FFXIVLog.ts";

import { CartStateTypes } from "./state";

export type Mutations<S = CartStateTypes> = {
  [CartMutationTypes.add](state: S, log: StoreLog): void;
};

export const mutations: MutationTree<CartStateTypes> & Mutations = {
  /**
   * カートへログを追加する
   * @param log
   */
  [CartMutationTypes.add](state, log: StoreLog) {
    state.cart = [...state.cart, log];
  },
};
