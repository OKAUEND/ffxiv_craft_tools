import { mergeDuplicateNameObject, useAggregateLog } from "@/module/aggregate";

import { makeAggregate } from "@/module/craftlogutiles";
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

    const temp = makeTESTCartHoldLog(1, "raw", childs);
    const test = makeAggregate(temp);

    const result = mergeDuplicateNameObject([test, test]);

    //1つにまとまったか
    expect(result.length).toBe(1);
  });
  test("重複しているログ同士の製作個数を合算しているか", () => {
    const childs = [...Array(2)].map((_, index) => {
      return makeTESTCartHoldLog(index, "middle");
    });

    const temp = makeTESTCartHoldLog(1, "raw", childs);
    const test = makeAggregate(temp);

    const result = mergeDuplicateNameObject([test, test]);

    const count = temp.count + temp.count;

    expect(result[0].requiredCount).toEqual(count);
  });
  test("hooks関数で初期値を代入できているか", () => {
    const childs = [...Array(2)].map((_, index) => {
      return makeTESTCartHoldLog(index, "middle");
    });

    const temp = makeTESTCartHoldLog(1, "raw", childs);
    const useAggregate = useAggregateLog([temp]);
    expect(useAggregate.state.selectedLogs).toEqual([temp]);
  });

  test("hooks関数で初期値を設定したときに、watchメソッドが感知し、対象オブジェクトを抽出しているか", () => {
    const childs = [...Array(2)].map((_, index) => {
      return makeTESTCartHoldLog(index, "raw");
    });

    const temp = makeTESTCartHoldLog(1, "middle", childs);
    const useAggregate = useAggregateLog([temp]);
  });
});
