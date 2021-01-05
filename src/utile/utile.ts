import { FirestoreData, StoreLog } from "@/utile/FFXIVLogTypes";

/**
 * 選択データをStoreに一時保存する構造を作成する
 * @param data
 * @param value
 */
export const makeLog = (data: FirestoreData, value: number): StoreLog => ({
  log: data,
  value: value,
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
});

/**
 * 配列を生成する
 * @param args
 * @param args2
 */
export const createLogs = (args: StoreLog, args2: StoreLog): StoreLog[] => [
  args,
  args2,
];

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
  return targets.filter(
    (target) => target.log.text.engname !== args.log.text.engname
  );
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
