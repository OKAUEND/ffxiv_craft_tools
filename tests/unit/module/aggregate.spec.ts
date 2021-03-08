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

/**
 *テスト用の製作レシピの木構造オブジェクトを生成する
 */
const makeTestLogFactory = () => {
  //最上位のノードを作成する
  return [...Array(HORIZONTAL_VALUE)].map((topCount) => {
    //中層のノードとそれの子にあたる低層のノードを作成する
    const middle = [...Array(HORIZONTAL_VALUE)].map((middleCount) => {
      //最下層のノードを作成する
      const raw = [...Array(CHILD_COUNT)].map((childCount) => {
        return makeTESTCartHoldLog(childCount, `raw`);
      });
      return makeTESTCartHoldLog(middleCount, "middle", raw);
    });
    return makeTESTCartHoldLog(topCount, "TOP", middle);
  });
};

describe("Module : 集計関数", () => {});
