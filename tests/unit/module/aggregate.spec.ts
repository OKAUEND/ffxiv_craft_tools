import { findTreeTerminalLog } from "@/module/aggregate";
const HORIZONTAL_VALUE = 4;
const CHILD_COUNT = 2;
const NODE_DEPTH = 4;

const makeTESTCartHoldLog = (value: number, rank: string): CartHoldLog => ({
  name: `TEST${value}`,
  childLogs: [] as CartHoldLog[],
  imageurl: `TEST${value}.com`,
  count: 1,
  rank: `${rank}`,
});

describe("Module : 集計関数", () => {});
