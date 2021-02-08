import {
  StoreLog,
  ChildLogs,
  CraftLog,
  AggregateLog,
} from "@/@types/FFXIVLogTypes";

import { fetchCraftLogFromPath } from "@/module/firebase";
import { recreateLogStructure } from "@/module/craftlogutiles";
import { useProgress } from "@/module/statefull";

export const validChildFactorOnlyEnable = (
  childlogs: ChildLogs[]
): ChildLogs[] => {
  return childlogs.filter((childlog) => childlog.isEnable === true);
};

const createAggregateLogs = async (craftlog: CraftLog) => {
  const validChildFactor = validChildFactorOnlyEnable(craftlog.childrenlogs);

  //子要素の子要素を取り出す
  return await Promise.all(
    validChildFactor.map(
      async (child): Promise<AggregateLog> => {
        //1つ1つの製作レシピをループで処理する
        const log = await fetchCraftLogFromPath(child.childrenDocumentRef);

        //ここで再帰処理を行い、さらに子のノードを探す
        //親の製作個数を乗算しないようにしておき、元の製作個数を消失させないようにする
        const childnode = await createAggregateLogs(log);

        return recreateLogStructure(log, child.value, childnode);
      }
    )
  );
};

export const getChildLogDetail = async (cartlogs: StoreLog[]) => {
  const { forwardProgress, calculateOnceProgressValue } = useProgress();

  calculateOnceProgressValue(cartlogs.length);

  return await Promise.all(
    cartlogs.map(async (craftlog) => {
      const temp = await createAggregateLogs(craftlog.log);

      const logs = recreateLogStructure(craftlog.log, craftlog.value, temp);
      //処理が終わったら進捗度を上げる
      forwardProgress();

      return logs;
    })
  );
};

export const aggregateLogCount = (logs:AggregateLog[],targetRank:string) => {
  const acc = [];
  logs.reduce((log,current) =>{
    return log;
  })

};
