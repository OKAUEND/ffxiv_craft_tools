export interface CraftLog {
  Childrenlogs: ChildLogs[];
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

export interface ChildLogs {
  isEnable: boolean;
  order: number;
  childrenDocumentRef?: firebase.default.firestore.DocumentReference;
  name: string;
  engname?: string;
  imageurl: string;
  value: number;
}

export interface CraftLogs {
  logs: CraftLog[];
}

export interface StoreLog {
  log: CraftLog;
  value: number;
  order: number;
}

export interface Crafter {
  name: string;
  jpname: string;
  type: string;
  order: number;
  imageurl: string;
}

export interface Level {
  name: string;
  type: string;
  order: number;
  upperlevel: number;
  lowerlevel: number;
}
