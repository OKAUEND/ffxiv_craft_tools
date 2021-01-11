import { Store as VuexStore, Module } from "vuex";

import "@/utile/FFXIVLogTypes";

import { RootState } from "@/store";

import { state, CartStateTypes } from "./state";
import { Getters, getters } from "./getters";
import { Mutations, mutations } from "./mutations";
import { Actions, actions } from "./actions";

export type CartStore<S = CartStateTypes> = Omit<
  VuexStore<S>,
  "getter" | "commit" | "dispatch"
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    paylod: P
  ): ReturnType<Mutations[K]>;
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    paylod: Parameters<Actions[K]>[1]
  ): ReturnType<Actions[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};

export const store: Module<CartStateTypes, RootState> = {
  state,
  getters,
  mutations,
  actions,
};
