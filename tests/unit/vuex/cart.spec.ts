import { mutations } from "@/store/module/cart/mutations";
import { actions } from "@/store/module/cart/actions";
import { getters } from "@/store/module/cart/getters";
import { CartStateTypes } from "@/store/module/cart/state";
import { StoreLog, FirestoreData } from "@/utile/FFXIVLogTypes";

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

const value2: FirestoreData = {
  imageurl: "TEST",
  patchversion: 1,
  text: {
    engname: "TEST2",
    name: "ユニットテスト",
  },
};

const value3: FirestoreData = {
  imageurl: "TEST",
  patchversion: 1,
  text: {
    engname: "TEST3",
    name: "ユニットテスト",
  },
};

describe("Store Cart", () => {
  test("Mutaionで値を更新できるか", () => {
    const state: CartStateTypes = { cart: [] };
    const log: StoreLog = {
      log: value,
      value: 1,
      order: 0,
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
      order: 0,
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
  });
  test("Getterを実行し値を取得できるか", () => {
    const testlog: StoreLog = {
      log: value,
      value: 1,
      order: 0,
    };
    const state: CartStateTypes = { cart: [testlog] };

    const result = getters.getCarts(state);

    expect(result[0]).toEqual(testlog);
  });

  test("重複した値があった場合、valueを合算して再度追加し直すか", () => {
    const log: StoreLog = {
      log: value,
      value: 1,
      order: 0,
    };
    const state: CartStateTypes = { cart: [log] };
    const result: StoreLog = {
      log: value,
      value: 2,
      order: 0,
    };

    mutations["SET_TO CART"](state, log);
    expect(state).toEqual({
      cart: [result],
    });
  });

  test("Storeの配列の長さを取得する", () => {
    const state: CartStateTypes = { cart: [] };

    const result1: number = getters.getCartsLength(state);

    expect(result1).toEqual(0);

    const testlog: StoreLog = {
      log: value,
      value: 1,
      order: 0,
    };

    mutations["SET_TO CART"](state, testlog);

    const value2: FirestoreData = {
      imageurl: "TEST",
      patchversion: 1,
      text: {
        engname: "TEST2",
        name: "ユニットテスト",
      },
    };

    const testlog2: StoreLog = {
      log: value2,
      value: 2,
      order: 0,
    };

    mutations["SET_TO CART"](state, testlog2);

    const result3: number = getters.getCartsLength(state);

    //Stateになにもないときは2を
    expect(result3).toEqual(2);
  });

  test("任意の製作レシピを削除できるか", () => {
    const testlog1: StoreLog = {
      log: value,
      value: 1,
      order: 0,
    };
    const testlog2: StoreLog = {
      log: value2,
      value: 2,
      order: 1,
    };
    const testlog3: StoreLog = {
      log: value3,
      value: 3,
      order: 2,
    };

    const resultlog3: StoreLog = {
      log: value3,
      value: 3,
      order: 1,
    };

    const state: CartStateTypes = { cart: [testlog1, testlog2, testlog3] };

    mutations["DEL_TO_CARTITEM"](state, testlog2);

    expect(state).toEqual({ cart: [testlog1, resultlog3] });
  });
});
