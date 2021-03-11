import { findTreeTerminalLog } from "@/module/aggregate";
import { CartHoldLog } from "@/@types/FFXIVLogTypes";

const HORIZONTAL_VALUE = 4;
const CHILD_COUNT = 2;

const makeTESTCartHoldLog = (
  value: number,
  rank: string,
  childs: CartHoldLog[] = [] as CartHoldLog[]
): CartHoldLog => ({
  name: `TEST${value}`,
  childLogs: childs,
  imageurl: `TEST${value}.com`,
  count: 1,
  rank: `${rank}`,
});

/**
 *テスト用の製作レシピの木構造オブジェクトを生成する
 */
const makeTestLogFactory = () => {
  //最上位のノードを作成する
  return [...Array(HORIZONTAL_VALUE)].map((_, topIndex) => {
    //中層のノードとそれの子にあたる低層のノードを作成する
    const middle = [...Array(HORIZONTAL_VALUE)].map((_, middleIndex) => {
      //最下層のノードを作成する
      const raw = [...Array(CHILD_COUNT)].map((_, childIndex) => {
        return makeTESTCartHoldLog(childIndex, `raw`);
      });
      return makeTESTCartHoldLog(middleIndex, "middle", raw);
    });
    return makeTESTCartHoldLog(topIndex, "TOP", middle);
  });
};

describe("Module : 集計関数", () => {});
