import { findTreeTerminalLog } from "@/module/aggregate";
import { CartHoldLog } from "@/@types/FFXIVLogTypes";

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

const makeTestLogFactory = () => {
  const tops = [...Array(HORIZONTAL_VALUE)].map((count) => {
    return makeTESTCartHoldLog(count, "TOP");
  });

  const middle = [...Array(HORIZONTAL_VALUE * CHILD_COUNT)].map((count) => {
    const raw =
    return makeTESTCartHoldLog(count, "middle");
  });

};

describe("Module : 集計関数", () => {});
