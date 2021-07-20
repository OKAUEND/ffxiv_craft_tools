import { Aggregate, CartHoldLog } from "@/@types/FFXIVLogTypes";
import { TargetRank } from "@/@types/UserInterfaceTypes";
import { makeAggregate } from "@/module/craftlog-utiles";
import { reactive, readonly } from "vue";

/**
 * 目的の製作段階に該当する製作ログを絞り込むための再帰関数
 * @param targetLog
 * @param targetRank
 * @param calculatedLod
 * @param callerAccumulator
 * @returns @Aggregate[]
 */
export const filteringPreOrderRecursive = (
  targetLog: CartHoldLog,
  targetRank: string,
  calculatedLod: Aggregate = {} as Aggregate,
  callerAccumulator: Aggregate[] = [] as Aggregate[]
): Aggregate[] => {
  return targetLog.childLogs.reduce((acc, current): Aggregate[] => {
    //子と親の関係を逆転させ、同時に必要個数も親の個数と子の個数で乗算させて新しい値を作る
    //関係性を逆転させることで、表示画面で必要素材の下に製作先のアイテムを表示させれるようにする
    const aggregateLog = makeAggregate(current, calculatedLod);

    //子が存在していないか、もしくは表示させたい製作段階なら再帰処理をやめる
    //中間段階での製作個数表示があった場合のため、制作段階のでも判断する
    if (current.childLogs.length === 0 || current.rank === targetRank) {
      //現状の
      const useAcc = acc.length > 0 ? acc : callerAccumulator;
      return [...useAcc, aggregateLog];
    }
    return filteringPreOrderRecursive(current, targetRank, aggregateLog, acc);
  }, [] as Aggregate[]);
};

/**
 * 目的の製作段階に該当する製作ログを絞り込む
 * @param logs
 * @param targetRank
 * @returns
 */
export const filterTargetRankObject = (
  logs: CartHoldLog[],
  targetRank: string
) => {
  return logs.reduce((acc, log) => {
    const aggregateLog = makeAggregate(log);

    if (targetRank === log.rank) {
      return [...acc, ...[aggregateLog]];
    }

    const temp = filteringPreOrderRecursive(log, targetRank, aggregateLog);
    return [...acc, ...temp];
  }, [] as Aggregate[]);
};

/**
 * 重複名の製作ログを1つに統合する
 * @param logs
 * @returns
 */
export const mergeDuplicateNameObject = (logs: Aggregate[]): Aggregate[] => {
  return logs.reduce((acc, log) => {
    //すでにマージされた内容だったら、処理せず次のへ進む
    if (acc.some((value) => value.engname === log.engname)) {
      return acc;
    }

    //重複しているログを抽出する
    const targetLog = logs.filter(
      (targetLog) => targetLog.engname === log.engname
    );

    //抽出し重複している製作ログを1つにする
    const mergeLog = targetLog.reduce((acc, log) => {
      //1つにしたい内容は製作個数を加算し、親を配列にしたいので、
      //2つのキーだけを新しく作りそれを置き換える

      const updatePropertie = {
        requiredCount:
          (acc.requiredCount > 0 ? acc.requiredCount : 0) + log.requiredCount,
        parent: [acc.parent, log.parent],
      };

      return (acc = Object.assign(log, updatePropertie));
    }, {} as Aggregate);

    return [...acc, mergeLog];
  }, [] as Aggregate[]);
};

interface AggregateState {
  aggregateLogs: Aggregate[];
  selectedLogs: CartHoldLog[];
}

/**
 * 集計画面の製作ログを管理するhook関数
 * @returns
 */
export const useAggregateLog = (initiatedLogs: CartHoldLog[]) => {
  const state = reactive<AggregateState>({
    aggregateLogs: [],
    selectedLogs: initiatedLogs,
  });

  const fiterTargetRankLogs = (targetRank: TargetRank) =>
    (state.aggregateLogs = filterTargetRankObject(
      state.selectedLogs,
      targetRank
    ));

  return {
    state: readonly(state),
    fiterTargetRankLogs,
  };
};
