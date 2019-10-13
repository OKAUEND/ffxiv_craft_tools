import { shallowMount } from "@vue/test-utils";
import CategoriesList from "@/components/molecules/CategoriesList/index.vue";

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
describe("CategoriesList", () => {
  it("propでデータを渡されるか", () => {
    const LevelWarapper = shallowMount(CategoriesList, {
      propsData: {
        category: Level
      }
    });
    expect(LevelWarapper.props().category).toEqual(Level);
    const OtherWarapper = shallowMount(CategoriesList, {
      propsData: {
        category: other
      }
    });
    expect(OtherWarapper.props().category).toEqual(other);
  });
  it("H2に文字が表示されるか", () => {
    const LevelWarapper = shallowMount(CategoriesList, {
      propsData: {
        category: Level
      }
    });
    expect(LevelWarapper.find("h2").text()).toBe(Level.name);
    const OtherWarapper = shallowMount(CategoriesList, {
      propsData: {
        category: other
      }
    });
    expect(OtherWarapper.find("h2").text()).toBe(other.name);
  });
});
