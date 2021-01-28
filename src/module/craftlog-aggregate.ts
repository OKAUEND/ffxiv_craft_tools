import { ref } from "vue";

import {
  StoreLog,
  ChildLogs,
  CraftLog,
  AggregateLog,
} from "@/@types/FFXIVLogTypes";

import { fetchCraftLogFromPath } from "@/module/firebase";
import { recreateLogStructure } from "@/module/craftlogutiles";

const progress = ref<number>(0);

export const useProgress = () => {
  return progress;
};

export const validChildFactorOnlyEnable = (
  childlogs: ChildLogs[]
): ChildLogs[] => {
  return childlogs.filter((childlog) => childlog.isEnable === true);
};

const createAggregateLogs = async (craftlog: CraftLog, count: number) => {
  const validChildFactor = validChildFactorOnlyEnable(craftlog.childrenlogs);

  //子要素の子要素を取り出す
  return await Promise.all(
    validChildFactor.map(
      async (child): Promise<AggregateLog> => {
        //1つ1つの製作レシピをループで処理する
        const log = await fetchCraftLogFromPath(child.childrenDocumentRef);

        //ここで再帰処理を行い、さらに子のノードを探す
        const childnode = await createAggregateLogs(log, child.value * count);

        return recreateLogStructure(log, child.value * count, childnode);
      }
    )
  );
};

export const getCraftLogChildLogDetail = async (cartlogs: StoreLog[]) => {
  const temp = await Promise.all(
    cartlogs.map(async (craftlog) => {
      const temp = await fetchCraftLogFromPath(craftlog.log.Childrenlogs);

      //処理が終わったら進捗度を上げる
    })
  );
};
