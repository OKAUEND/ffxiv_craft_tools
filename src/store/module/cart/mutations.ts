import { MutationTree } from "vuex";

import { CartMutationTypes } from "./mutation-type";
import { StoreLog } from "@/utile/FFXIVLogTypes";

import { CartStateTypes } from "./state";

import {
  createLogs,
  mergeDuplicateLog,
  includesTargets,
  fetchTargetLog,
} from "@/utile/utile";

export type Mutations<S = CartStateTypes> = {
  [CartMutationTypes.add](state: S, paylod: StoreLog): void;
};

export const mutations: MutationTree<CartStateTypes> & Mutations = {
  /**
   * カートへログを追加する
   * @param log
   */
  [CartMutationTypes.add](state, paylod: StoreLog) {
    //追加したいデータがすでにStoreに存在した場合、個数を合算したいためStoreから取り出し合算処理を行う
    const target = includesTargets(state.cart, paylod)
      ? mergeDuplicateLog(fetchTargetLog(state.cart, paylod), paylod)
      : paylod;
    //新しい配列を生成する。その時に重複しているのを除外する

    const logs = createLogs(state.cart, target);
    //Stateを更新する
    state.cart = logs;
  },
};
