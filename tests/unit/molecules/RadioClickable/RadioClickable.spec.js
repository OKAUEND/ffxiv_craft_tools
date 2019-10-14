import { shallowMount } from "@vue/test-utils";
import RadioClickable from "@/components/molecules/RadioClickable/index.vue";

const LevelType = "Level";
const OtherType = "other";

const LevelData = { ID: 1, lowerLevel: 1, upperLevel: 10 };
const OtherData = { ID: 1, name: "戦闘" };

describe("RadioClickable", () => {
  it("propのTypeがLevelのときに、下限レベルと上限レベルを文字列結合して表示しているか", () => {});
});
