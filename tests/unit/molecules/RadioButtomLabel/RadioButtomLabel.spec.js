import { shallowMount } from "@vue/test-utils";
import RadioButtomLabel from "@/components/molecules/RadioButtomLabel/index.vue";

const LevelType = "Level";
const OtherType = "Equipment";

const LevelData = { ID: 1, lowerLevel: 1, upperLevel: 10 };
const OtherData = { ID: 1, name: "戦闘" };

describe("RadioClickable", () => {
  it("propのTypeがLevelのときに、下限レベルと上限レベルを文字列結合して表示しているか", () => {
    const Warapper = shallowMount(RadioButtomLabel, {
      propsData: {
        typecode: LevelType,
        value: LevelData
      }
    });
    const LabelText = LevelData.lowerLevel + "~" + LevelData.upperLevel;
    expect(Warapper.find(".button-design").text()).toBe(LabelText);
  });
  it("propのTypeがotherのときに、nameの値を表示できるか", () => {
    const Warapper = shallowMount(RadioButtomLabel, {
      propsData: {
        typecode: OtherType,
        value: OtherData
      }
    });
    expect(Warapper.find(".button-design").text()).toBe(OtherData.name);
  });
  it("INPUTのIDタグとLabelのforタグが同じ値で紐付けられるか", () => {
    const Warapper = shallowMount(RadioButtomLabel, {
      propsData: {
        typecode: LevelType,
        value: LevelData
      }
    });
    const BindTags = LevelType + LevelData.ID;
    expect(Warapper.find("input").attributes().id).toBe(BindTags);
    expect(Warapper.find("label").attributes().for).toBe(BindTags);
    expect(Warapper.find("input").attributes().id).toBe(
      Warapper.find("label").attributes().for
    );
  });
});
