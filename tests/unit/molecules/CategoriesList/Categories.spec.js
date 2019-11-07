import { shallowMount } from "@vue/test-utils";
import CategoriesList from "@/components/molecules/CategoriesList/index.vue";
import RadioChild from "@/components/molecules/RadioButtomLabel/index.vue";
import { LevelArray, Icons } from "@/testData.js";
import {
  IconState,
  LevelState
} from "@/components/molecules/CategoriesList/CategoryState.js";

const LevelType = "Level";
const StringType = "Secretbook";
const LevelType = "Level";

const Level = LevelArray[2];
const Icon = Icons[1];

const LevelClass = LevelState.create(Level);
const IconClass = IconState.create(Icon);

const LevelWarapper = shallowMount(CategoriesList, {
  propsData: {
    typecode: LevelType,
    category: Level,
    value: ""
  }
});

const IconsWarapper = shallowMount(CategoriesList, {
  propsData: {
    typecode: IconType,
    category: Icon,
    value: ""
  }
});
};

const other = {
  name: "戦闘",
  ID: 1,
  type: "Battle",
};

describe("CategoriesList", () => {});
