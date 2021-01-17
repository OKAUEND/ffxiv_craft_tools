import firebase from "@/firebase";
import { CraftLog } from "@/@types/FFXIVLogTypes";

export const fetchCraftLogs = async (
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
