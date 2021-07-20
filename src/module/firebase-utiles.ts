import {
  ChildSimplifiedCraftLog,
  FullCraftLog,
  SimpleCraftLog,
  StoreLog,
} from "@/@types/FFXIVLogTypes";
import firebase from "@/firebase";

/**
 * 条件に一致する製作レシピを取り出す
 * @param crafter
 * @param upperlevel
 * @param lowerlevel
 * @returns CraftLog[]
 */
export const fetchQueryConditionCraftLog = async (
  crafter: string,
  upperlevel: number,
  lowerlevel: number
): Promise<CraftLog[]> => {
  const documentRef: firebase.firestore.Query<firebase.firestore.DocumentData> = firebase
    .firestore()
    .collection("CraftLog")
    .where("type.job", "==", crafter)
    .where("level.level", "<=", upperlevel)
    .where("level.level", ">=", lowerlevel);

  return await documentRef.get().then((queryShapshot) => {
    return queryShapshot.docs.map((doc) => doc.data() as CraftLog);
  });
};

/**
 * 必要素材となる子の製作レシピを取り出す
 * @param documentRef
 * @returns ChildSimplifiedCraftLog
 */
export const fetchCraftLogFromPath = async (
  documentRef: firebase.firestore.DocumentReference
): Promise<ChildSimplifiedCraftLog> => {
  return await documentRef.get().then((snapshot) => {
    return snapshot.data() as ChildSimplifiedCraftLog;
  });
};

type ValidChildOnlyEnable = (a: SimpleCraftLog[]) => SimpleCraftLog[];

const validChildOnlyEnable: ValidChildOnlyEnable = (param) => {
  return param.filter((item) => item.isEnable === true);
};

const fetchAllValidChildFactor = async (craftlog: ChildSimplifiedCraftLog) => {
  //有効な子要素のみに絞り込む
  const validChildFactor = validChildOnlyEnable(craftlog.simplechildlogs);

  return await Promise.all(
    validChildFactor.map(async (child): Promise<FullCraftLog> => {
      //1つ1つの製作レシピをループで処理する
      const log = await fetchCraftLogFromPath(child.relationDocumentRef);

      //ここで再帰処理を行い、さらに子のノードを探す
      //親の製作個数を乗算しないようにしておき、元の製作個数を消失させないようにする
      const childnode = await fetchAllValidChildFactor(log);

      //全データ版である素材情報の配列を専用のプロパティに入れる。
      // log.childlogs = childnode;
      const { simplechildlogs, ...testlog } = log;

      return { ...testlog, childlogs: childnode };
    })
  );
};

export const getAllRequiredCraftLogs = async (cartlogs: StoreLog[]) => {
  return await Promise.all(
    cartlogs.map(async (craftlog) => {
      return await fetchAllValidChildFactor(craftlog.log);
    })
  );
};
