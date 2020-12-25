import "@/interface/FFXIVLog.ts";
import { StoreLog } from "@/interface/FFXIVLog.ts";

export interface RootState {
  version: string;
}

export interface LayoutState {
  /**
   * 選択した製作レシピの配列
   * @type {Array<StoreLog>}
   */
  cart: Array<StoreLog>;
}
