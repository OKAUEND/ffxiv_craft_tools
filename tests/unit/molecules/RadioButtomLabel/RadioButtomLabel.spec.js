import { shallowMount } from "@vue/test-utils";
import RadioButtomLabel from "@/components/molecules/RadioButtomLabel/index.vue";
import {
  LevelState,
  JobState
} from "@/components/molecules/CategoriesList/CategoryState.js";
import { LevelArray, Icons } from "@/FFXIV.js";

const LevelData = LevelArray[1];
const ImgsData = Icons[1];

const LevelClass = LevelState.create(LevelData);
const IconClass = JobState.create(ImgsData);

const LevelWarapper = shallowMount(RadioButtomLabel, {
  propsData: {
    ClassStateObject: LevelClass,
    value: ""
  }
});

const IconWarapper = shallowMount(RadioButtomLabel, {
  propsData: {
    ClassStateObject: IconClass,
    value: ""
  }
});

describe("RadioClickable", () => {
  it("propでClassのインスタンスが渡されているか", () => {
    expect(LevelWarapper.props().ClassStateObject).toBe(LevelClass);
    expect(IconWarapper.props().ClassStateObject).toBe(IconClass);
  });
  it("propで渡されたインスタンスで、TEXTを出力できるか", () => {
    expect(LevelWarapper.find("label").text()).toBe(LevelClass.Label);
  });
  it("INPUTのIDタグとLabelのforタグが同じ値で紐付けられるか", () => {
    const id = LevelClass.formID;
    expect(LevelWarapper.find("input").attributes().id).toBe(id);
    expect(LevelWarapper.find("label").attributes().for).toBe(id);
    expect(LevelWarapper.find("input").attributes().id).toBe(
      LevelWarapper.find("label").attributes().for
    );
  });
  it("Iconデータの場合、文字列ではなく画像が作成されているか", () => {
    expect(IconWarapper.find("img").attributes().src).toBe(IconClass.Label);
  });
  it("Radioボタンをクリックした時にemitされるか", () => {
    const Levelradioinput = LevelWarapper.find('input[type="radio"]');
    Levelradioinput.trigger("click");
    expect(LevelWarapper.emitted().change).toBeTruthy();
    const IconRadioInput = IconWarapper.find('input[type="radio"]');
    IconRadioInput.trigger("click");
    expect(IconWarapper.emitted().change).toBeTruthy();
  });
});
