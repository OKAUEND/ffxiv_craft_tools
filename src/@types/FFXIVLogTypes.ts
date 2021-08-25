export interface SimpleCraftLog {
  isEnable: boolean;
  order: number;
  relationDocumentRef: firebase.default.firestore.DocumentReference;
  name: string;
  engname?: string;
  imageurl: string;
  value: number;
}
interface BaseCraftLog {
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
  rank: string;
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

export interface ChildSimplifiedCraftLog extends BaseCraftLog {
  simplechildlogs: SimpleCraftLog[];
}

export interface FullCraftLog extends BaseCraftLog {
  childlogs: FullCraftLog[];
}

export interface CartHoldLog {
  childLogs: CartHoldLog[];
  name: string;
  engname?: string;
  imageurl: string;
  count: number;
  rank: string;
}

export interface Aggregate {
  parent: Aggregate | Aggregate[];
  name: string;
  engname?: string;
  imageurl: string;
  baseCount: number;
  requiredCount: number;
  rank: string;
}

export interface CraftLogs {
  logs: ChildSimplifiedCraftLog[];
}

export interface ScheduleData {
  log: ChildSimplifiedCraftLog;
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
