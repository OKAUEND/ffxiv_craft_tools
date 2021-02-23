import {
  StoreLog,
  ChildLogs,
  CraftLog,
  AggregateLog,
} from "@/@types/FFXIVLogTypes";

import { fetchCraftLogFromPath } from "@/module/firebase";
import {
  makeCartTempLogStructure,
  makeAggregate,
} from "@/module/craftlogutiles";
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

        return makeCartTempLogStructure(log, child.value, childnode);
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

      const logs = makeCartTempLogStructure(craftlog.log, craftlog.value, temp);
      //処理が終わったら進捗度を上げる
      forwardProgress();

      return logs;
    })
  );
};

export const findTreeTerminalLog = (
  targetLog: CartHoldLog,
  targetRank: string,
  calculatedLod: Aggregate = {} as Aggregate,
  callerAccumulator: Aggregate[] = [] as Aggregate[]
): Aggregate[] => {
  return targetLog.childLogs.reduce((acc, current): Aggregate[] => {
    //子と親の関係を逆転させ、同時に必要個数も親の個数と子の個数で乗算させて新しい値を作る
    //関係性を逆転させることで、表示画面で必要素材の下に製作先のアイテムを表示させれるようにする
    const aggregateLog = makeAggregate(current, targetLog, calculatedLod);

    //子が存在していないか、もしくは表示させたい製作段階なら再帰処理をやめる
    //中間段階での製作個数表示があった場合のため、制作段階のでも判断する
    if (current.childLogs.length === 0 || current.rank === targetRank) {
      //現状の
      const useAcc = acc.length > 0 ? acc : callerAccumulator;
      return [...useAcc, aggregateLog];
    }
    return findTreeTerminalLog(current, targetRank, aggregateLog, acc);
  }, [] as Aggregate[]);
};

export const CartHoldLogCount = (logs: CartHoldLog[], targetRank: string) => {
  const acc: Aggregate[] = [];
  return logs.forEach((log) => {
    const temp = findTreeTerminalLog(log, targetRank);
    [...acc, ...temp];
    return temp;
  });
};
