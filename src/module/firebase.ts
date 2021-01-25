import firebase from "@/firebase";
import { CraftLog } from "@/@types/FFXIVLogTypes";

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
 * @returns CraftLog
 */
export const fetchCraftLogFromPath = async (
  documentRef: firebase.firestore.DocumentReference
): Promise<CraftLog> => {
  return await documentRef.get().then((snapshot) => {
    return snapshot.data() as CraftLog;
  });
};
