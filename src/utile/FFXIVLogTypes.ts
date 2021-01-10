interface FirestoreData {
  Childrenlogs?: LogChildren[];
  gathering?: {
    Xpoint: number;
    Zpoint: number;
    collectionarea: string;
  };
  imageurl: string;
  ishighlevel?: boolean;
  level?: {
    itemlevel: number;
    level: number;
  };
  patchversion: number;
  priority?: number;
  rank?: string;
  starmark?: number;
  text: {
    engname: string;
    name: string;
  };
  type?: {
    MeisterBookRank: number;
    category: string;
    craftcontent: string;
    job: string;
  };
  updateTime?: firebase.default.firestore.Timestamp;
  website?: {
    eriones: string;
    lodestone: string;
  };
}

interface LogChildren {
  isEnable: boolean;
  order: number;
  childrenDocumentRef?: firebase.default.firestore.DocumentReference;
  name: string;
  engname?: string;
  imageurl: string;
  value: number;
}

interface FirestoreFetchData {
  value: FirestoreData[];
}

interface StoreLog {
  log: FirestoreData;
  value: number;
  order: number;
}

interface Crafter {
  name: string;
  jpname: string;
  type: string;
  order: number;
  imageurl: string;
}

interface Level {
  name: string;
  type: string;
  order: number;
  upperlevel: number;
  lowerlevel: number;
}

export { FirestoreData, FirestoreFetchData, StoreLog, Crafter, Level };
