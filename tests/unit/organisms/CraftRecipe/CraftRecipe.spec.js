import { shallowMount } from "@vue/test-utils";
import CategoriesList from "@/components/organisms/CraftRecipe/index.vue";

const Level = {
  name: "LEVEL",
  type: "Level",
  List: [
    { ID: 1, lowerLevel: 1, upperLevel: 10 },
    { ID: 2, lowerLevel: 11, upperLevel: 20 },
    { ID: 3, lowerLevel: 21, upperLevel: 30 },
    { ID: 4, lowerLevel: 31, upperLevel: 40 },
    { ID: 5, lowerLevel: 41, upperLevel: 50 }
  ]
};

const other = {
  name: "TYPE",
  type: "other",
  list: [
    { name: "戦闘", ID: 1 },
    { name: "非戦闘", ID: 2 },
    { name: "おしゃれ", ID: 3 },
    { name: "家具", ID: 4 },
    { name: "庭具", ID: 5 }
  ]
};

describe("CraftRecipe", () => {
  it("propでデータを渡されるか", () => {});
  it("H2に文字が表示されるか", () => {});
  it("typeがLEVELの場合、リストレンダリングされているか", () => {});
  it("typeがLEVELの場合、下限Levelと上限Levelを文字列結合して文字列が表示されてるか", () => {});
  it("typeがotherの場合、リストレンダリングされているか", () => {});
  it("typeがotherの場合、nameの文字列が表示されてるか", () => {});
});
