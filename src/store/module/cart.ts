import { reactive } from "vue";
import { InjectionKey } from "vue";
import { Module, GetterTree, MutationTree } from "vuex";
import "@/interface/FFXIVLog.ts";
import { LayoutState, RootState } from "@/store/types.ts";
import { StoreLog } from "@/interface/FFXIVLog.ts";

interface LogState {
  Logs: Array<StoreLog>;
}

const mutations = {
  cart: {
    add: "SET_TO CART",
  },
};

const state: LayoutState = {
  cart: [],
};

const mutation: MutationTree<LayoutState> = {
  /**
   * カートへログを追加する
   * @param log
   */
  [mutations.cart.add](state, log: StoreLog) {
    state.cart = [...state.cart, log];
  },
};

export const cart: Module<LayoutState, RootState> = {
  namespaced: true,
  state,
  mutations: mutation,
};
