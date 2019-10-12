import { shallowMount } from "@vue/test-utils";
import CategoriesList from "@/components/organisms/CraftRecipe/index.vue";

const Level = {
  name: "LEVEL",
  type: "Level",
  List: [
    { lowerLevel: 1, upperLevel: 10 },
    { lowerLevel: 11, upperLevel: 20 },
    { lowerLevel: 21, upperLevel: 30 },
    { lowerLevel: 31, upperLevel: 40 },
    { lowerLevel: 41, upperLevel: 50 }
  ]
};

const other = {
  name: "TYPE",
  type: "other",
  list: [
    { name: "戦闘", ID: 1 },
    { name: "戦闘", ID: 2 },
    { name: "戦闘", ID: 3 },
    { name: "戦闘", ID: 4 },
    { name: "戦闘", ID: 5 }
  ]
};

describe("CraftRecipe", () => {});
