import { shallowMount } from "@vue/test-utils";
import RadioButtomLabel from "@/components/molecules/RadioButtomLabel/index.vue";
import {
  LevelState,
  JobState
} from "@/components/molecules/CategoriesList/CategoryState.js";
import { LevelArray, Icons } from "@/testData.js";

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
