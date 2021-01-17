import { CraftLog, StoreLog } from "@/@types/FFXIVLogTypes";

export function assertIsDefind<T>(val: T): asserts val is NonNullable<T> {
  if (val === undefined || val === null) {
    throw new Error(`対象が存在しません ${val}`);
  }
}

/**
 * 選択データをStoreに一時保存する構造を作成する
 * @param data
 * @param value
 * @param order
 */
export const makeLog = (
  data: CraftLog,
  value: number,
  order: number
): StoreLog => ({
  log: data,
  value: value,
  order: order,
});

/**
 * 同じ製作レシピをの製作個数を合算する
 * @param args
 * @param args2
 */
export const mergeDuplicateLog = (
  args: StoreLog,
  args2: StoreLog
): StoreLog => ({
  log: args.log,
  value: args.value + args2.value,
  order: args.order,
});

/**
 * 配列を生成する
 * @param state
 * @param paylod
 */
export const createLogs = (state: StoreLog[], paylod: StoreLog): StoreLog[] => {
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
export const addLogs = (logs: StoreLog[], args: StoreLog): StoreLog[] => [
  ...logs,
  args,
];

/**
 * 対象の製作レシピをStoreから削除する
 * @param targets
 * @param args
 * @returns Array
 */
export const deleteLogs = (targets: StoreLog[], args: StoreLog): StoreLog[] => {
  const tmp = targets.filter(
    (target) => target.log.text.engname !== args.log.text.engname
  );

  return tmp.map((targer, index) => {
    return makeLog(targer.log, targer.value, index);
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
  targets: StoreLog[],
  args: StoreLog
): StoreLog => {
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
  targets: StoreLog[],
  args: StoreLog
): boolean => {
  return targets.some(
    (target) => target.log.text.engname === args.log.text.engname
  );
};
