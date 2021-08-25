import {
  Aggregate,
  CartHoldLog,
  ChildSimplifiedCraftLog,
  ScheduleData,
} from "@/@types/FFXIVLogTypes";

export function assertIsDefind<T>(val: T): asserts val is NonNullable<T> {
  if (val === undefined || val === null) {
    throw new Error(`対象が存在しません ${val}`);
  }
}

export const makeAggregate = (
  currentLog: CartHoldLog,
  cacalculatedLod: Aggregate = {} as Aggregate
): Aggregate => ({
  name: currentLog.name,
  engname: currentLog.engname,
  baseCount: currentLog.value,
  requiredCount:
    currentLog.value *
    (cacalculatedLod.requiredCount > 0 ? cacalculatedLod.requiredCount : 1),
  imageurl: currentLog.imageurl,
  parent: cacalculatedLod,
  rank: currentLog.rank,
});

/**
 * 選択データをStoreに一時保存する構造を作成する
 * @param data
 * @param value
 * @param order
 */
export const makeLog = (
  data: ChildSimplifiedCraftLog,
  value: number,
  order: number
): ScheduleData => ({
  log: data,
  baseorder: value,
  order: order,
});

/**
 * 同じ製作レシピをの製作個数を合算する
 * @param args
 * @param args2
 */
export const mergeDuplicateLog = (
  args: ScheduleData,
  args2: ScheduleData
): ScheduleData => ({
  log: args.log,
  order: args.order + args2.order,
  baseorder: args.baseorder,
});

/**
 * 配列を生成する
 * @param state
 * @param paylod
 */
export const createLogs = (
  state: ScheduleData[],
  paylod: ScheduleData
): ScheduleData[] => {
  const tmp = [...state, paylod];
  return Array.from(
    tmp
      .reduce((map, log) => map.set(log.log.text.engname, log), new Map())
      .values()
  );
};

/**
 * 製作レシピをStoreに追加する
 * @param logs
 * @param args
 */
export const addLogs = (
  logs: ScheduleData[],
  args: ScheduleData
): ScheduleData[] => [...logs, args];

/**
 * 対象の製作レシピをStoreから削除する
 * @param targets
 * @param args
 * @returns Array
 */
export const deleteLogs = (
  targets: ScheduleData[],
  args: ScheduleData
): ScheduleData[] => {
  const tmp = targets.filter(
    (target) => target.log.text.engname !== args.log.text.engname
  );

  return tmp.map((targer, index) => {
    return makeLog(targer.log, targer.order, index);
  });
};

/**
 * Store上にある重複製作レシピを取り出す
 * (!!:外部で予め同じデータが存在するのかチェックを行う必要あり!!)
 * @param targets
 * @param args
 * @return StoreLog
 */
export const fetchTargetLog = (
  targets: ScheduleData[],
  args: ScheduleData
): ScheduleData => {
  const temp = targets.find(
    (target) => target.log.text.engname === args.log.text.engname
  );
  //findは戻値にundefinedを含む可能性があるので、nullチェックをしundefinedが返らないように型を制限する
  assertIsDefind(temp);
  return temp;
};

/**
 * Storeに同じ製作レシピが含まれているか
 * @param targets
 * @param args
 * @returns boolean
 */
export const includesTargets = (
  targets: ScheduleData[],
  args: ScheduleData
): boolean => {
  return targets.some(
    (target) => target.log.text.engname === args.log.text.engname
  );
};
