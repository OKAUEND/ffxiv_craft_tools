import { CraftLog, CraftLogs, StoreLog } from "./FFXIVLogTypes";

export const dummyLog: CraftLog = {
  text: {
    name: "empty",
    engname: "empty",
  },
  imageurl: "empty",
  patchversion: 999,
  childrenlogs: [],
};

export const dummyStateLog: StoreLog = {
  log: dummyLog,
  value: 0,
  order: 0,
};
