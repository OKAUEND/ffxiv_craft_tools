import { shallowMount } from "@vue/test-utils";
import CategoriesList from "@/components/molecules/CategoriesList/index.vue";
import RadioChild from "@/components/molecules/RadioButtomLabel/index.vue";
import { LevelArray, Icons } from "@/testData.js";
import {
  IconState,
  LevelState
} from "@/components/molecules/CategoriesList/CategoryState.js";

const Level = LevelArray[2];
const Icon = Icons[1];

const LevelClass = LevelState.create(Level);
const IconClass = IconState.create(Icon);

const LevelWarapper = shallowMount(CategoriesList, {
  propsData: {
    category: Level
  }
});

const IconsWarapper = shallowMount(CategoriesList, {
  propsData: {
    category: Icon
  }
});

describe("CategoriesList", () => {
  it("Propsが受け取れているか", () => {
    expect(LevelWarapper.props().category).toBe(Level);
    expect(IconsWarapper.props().category).toBe(Icon);
  });
  it("算出プロパティでタイプ毎にクラスのインスタンスが作成されているか", () => {
    const LevelThis = {
      category: Level
    };
    expect(CategoriesList.computed.CategoryState.get.call(LevelThis)).toEqual(
      LevelClass
    );

    const IconThis = {
      category: Icon
    };

    expect(CategoriesList.computed.CategoryState.get.call(IconThis)).toEqual(
      IconClass
    );
  });
  it("子からのemit通知を受け取れているか", () => {
    const returnLevelData = LevelClass.fromSelectedData;
    LevelWarapper.find(RadioChild).vm.$emit("change", returnLevelData);
    expect(LevelWarapper.emitted().change[0][0]).toEqual(returnLevelData);

    const returnIconData = IconClass.fromSelectedData;
    IconsWarapper.find(RadioChild).vm.$emit("change", returnIconData);
    expect(IconsWarapper.emitted().change[0][0]).toEqual(returnIconData);
  });
});
