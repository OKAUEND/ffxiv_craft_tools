import { findTreeTerminalLog } from "@/module/aggregate";
import { CartHoldLog } from "@/@types/FFXIVLogTypes";

const HORIZONTAL_VALUE = 4;
const CHILD_COUNT = 2;

const makeTESTCartHoldLog = (
  value: number,
  rank: string,
  childs: CartHoldLog[] = [] as CartHoldLog[],
  count: number = 1 as number
): CartHoldLog => ({
  name: `TEST${value}${rank}`,
  engname: `TEST${value}${rank}`,
  childLogs: childs,
  imageurl: `TEST${value}.com`,
  count: count,
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

describe("Module : 集計関数", () => {
  test("木構造の最下層のノードを引っ張り出せるか", () => {
    const testNodeObject = makeTestLogFactory();
    // console.log(testNodeObject);
    testNodeObject.forEach((log) => {
      console.log(log, findTreeTerminalLog(log, "raw"));
    });
  });

  test("重複しているログを1つにまとめる", () => {
    const childs = [...Array(2)].map((_, index) => {
      return makeTESTCartHoldLog(index, "middle");
    });

    const test = [...Array(2)].map(() => {
      return makeTESTCartHoldLog(1, "raw", childs);
    });

    const result = mergeDuplicateNameObject(test);

    const match = makeTESTCartHoldLog(1, "raw", [...childs, ...childs], 2);
    expect(result.length).toEqual(1);
    expect(result[0]).toEqual(match);
  });
  test("重複しているログ同士の製作個数を合算する", () => {
    const childs = [...Array(2)].map((_, index) => {
      return makeTESTCartHoldLog(index, "middle");
    });

    const test = [...Array(2)].map(() => {
      return makeTESTCartHoldLog(1, "raw", childs);
    });

    const result = mergeDuplicateNameObject(test);

    const match = makeTESTCartHoldLog(1, "raw", [...childs, ...childs], 2);
    expect(result[0].count).toEqual(2);
  });
  test("子の順番が、個数の多い順になっているか", () => {});
});
