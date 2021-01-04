import { mutations } from "@/store/module/cart/mutations";
import { actions } from "@/store/module/cart/actions";
import { getters } from "@/store/module/cart/getters";
import { CartStateTypes } from "@/store/module/cart/state";
import { StoreLog, FirestoreData } from "@/interface/FFXIVLog.ts";

import { ActionContext } from "vuex";
import { RootState } from "@/store";

const value: FirestoreData = {
  imageurl: "TEST",
  patchversion: 1,
  text: {
    engname: "TEST",
    name: "ユニットテスト",
  },
};

describe("Store Cart", () => {
  test("Mutaionで値を更新できるか", () => {
    const state: CartStateTypes = { cart: [] };
    const log: StoreLog = {
      log: value,
      value: 1,
    };
    expect(state).toEqual({ cart: [] });
    mutations["SET_TO CART"](state, log);
    expect(state).toEqual({
      cart: [log],
    });
  });
  test("Actionsを実行できるか", () => {
    const testlog: StoreLog = {
      log: value,
      value: 1,
    };

    //Actionのモックを作成する
    const actionContext: ActionContext<CartStateTypes, RootState> = {
      commit: jest.fn(),
      dispatch: jest.fn(),
      state: { cart: [] },
      getters: {},
      rootGetters: {},
      rootState: { version: "", cart: [] },
    };

    actions.FETCH_CART(actionContext, testlog);
    expect(actionContext.commit).toHaveBeenCalledWith("SET_TO CART", testlog);
    console.log(actionContext.rootState);
  });
  test("Getterを実行し値を取得できるか", () => {
    const testlog: StoreLog = {
      log: value,
      value: 1,
    };
    const state: CartStateTypes = { cart: [testlog] };

    const result = getters.getCarts(state);

    console.log(result);
    expect(result[0]).toEqual(testlog);
  });
});
