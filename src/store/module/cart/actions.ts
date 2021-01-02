import { ActionTree, ActionContext } from "vuex";

import { StoreLog } from "@/interface/FFXIVLog.ts";
import { RootState } from "@/store";
import { CartStateTypes } from "./state";
import { Mutations } from "./mutations";
import { CartMutationTypes } from "./mutation-type";
import { CartActionTypes } from "./actions-type";

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    paylod: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<CartStateTypes, RootState>, "commit">;

export interface Actions {
  [CartActionTypes.add](
    { commit }: AugmentedActionContext,
    log: StoreLog
  ): void;
}

export const actions: ActionTree<CartStateTypes, RootState> & Actions = {
  [CartActionTypes.add]({ commit }, log: StoreLog) {
    commit(CartMutationTypes.add, log);
  },
};
