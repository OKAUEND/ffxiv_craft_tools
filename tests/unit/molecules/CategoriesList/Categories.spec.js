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

const Level = {
  ID: 1,
  lowerLevel: 1,
  upperLevel: 10,
};

const other = {
  name: "戦闘",
  ID: 1,
  type: "Battle",
};

describe("CategoriesList", () => {});
