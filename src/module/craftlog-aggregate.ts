import { ref } from "vue";

import { StoreLog, ChildLogs } from "@/@types/FFXIVLogTypes";
import { assertIsDefind } from "@/module/craftlogutiles";

const progress = ref<number>(0);

export const useProgress = () => {
  return progress;
};

export const validChildFactorOnlyEnable = (
  childlogs: ChildLogs[]
): ChildLogs[] => {
  return childlogs.filter((childlog) => childlog.isEnable === true);
};

const fetchCraftLogFromPath = async (childlogs: ChildLogs[]) => {
  const validChildFactor = validChildFactorOnlyEnable(childlogs);

  if (validChildFactor.length === 0) {
    return;
  }

  const details = await Promise.all(
    validChildFactor.map(async (child) => {
      //ここでFirestoreからデータを取得する
      //Firebaseのクエリを発行
    })
  );

  //再帰呼び出しをし、子要素の子要素を取り出す
};

export const getCraftLogChildLogDetail = async (cartlogs: StoreLog[]) => {
  const temp = await Promise.all(
    cartlogs.map(async (craftlog) => {
      const temp = await fetchCraftLogFromPath(craftlog.log.Childrenlogs);

      //処理が終わったら進捗度を上げる
    })
  );
};
