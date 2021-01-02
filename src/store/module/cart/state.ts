import { StoreLog } from "@/interface/FFXIVLog.ts";

export interface CartStateTypes {
  /**
   * 選択した製作レシピの配列
   * @type {Array<StoreLog>}
   */
  cart: StoreLog[];
}

export const state: CartStateTypes = {
  cart: [],
};
