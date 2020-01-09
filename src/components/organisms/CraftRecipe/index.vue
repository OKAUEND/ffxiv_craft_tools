<template>
  <article class="CraftRecipe">
    <div class="CraftRecipe__Container">
      <div class="CraftRecipe__Expansion">
        <expansion-group
          v-bind:Categories="Expansions"
          v-on:change="storeSelectExpansion"
        >
        </expansion-group>
      </div>
    </div>
    <div class="CraftRecipe__Container">
      <article class="CraftRecipe__CategoryDetail">
        <category-group v-bind:Categories="CrafterJobs" @change="storeJobClass">
          CLASS
        </category-group>
        <category-group v-bind:Categories="Equippeds" @change="storeEquippeds">
          Equipped
        </category-group>
        <category-group
          v-bind:Categories="Levels"
          v-bind:isStoreUse="true"
          @change="storeSelectLevelBand"
        >
          LEVEL
        </category-group>
        <category-group
          v-bind:Categories="MasterRecipes"
          v-bind:isStoreUse="true"
          @change="storeSelectLevelBand"
        >
          Master
        </category-group>
      </article>
      <article class="CraftRecipe__RecipeDetail">
        <recipe-list :Condition="createSelectedCondition"></recipe-list>
      </article>
    </div>
  </article>
</template>

<script>
import CategoryGroup from "@/components/organisms/CategoryGroup/CategoryGroup.vue";
import ExpansionGroup from "@/components/organisms/CategoryGroup/ExpansionGroup.vue";
import RecipeList from "@/components/organisms/RecipeList/index.vue";
import {
  ExpansionData,
  LevelArray,
  Icons,
  Masterbook,
  EquippedData
} from "@/FFXIV.js";
export default {
  name: "Oraganisms_CraftRecipe",
  components: {
    ExpansionGroup,
    CategoryGroup,
    RecipeList
  },
  data() {
    return {
      SelectExpansion: {},
      SelectLevelBand: {},
      SelectJobClass: {},
      SelectEquipped: {}
    };
  },
  computed: {
    CrafterJobs: {
      get() {
        return Icons;
      }
    },
    Levels: {
      get() {
        return this.filteringArray(LevelArray);
      }
    },
    MasterRecipes: {
      get() {
        return this.filteringArray(Masterbook);
      }
    },
    Equippeds: {
      get() {
        return EquippedData;
      }
    },
    Expansions: {
      get() {
        return ExpansionData;
      }
    },
    createSelectedCondition: {
      get() {
        return {
          ...this.SelectJobClass,
          ...this.SelectLevelBand,
          ...this.SelectEquipped
        };
      }
    }
  },
  methods: {
    storeSelectExpansion(value) {
      this.SelectExpansion = value;
    },
    storeSelectLevelBand(value) {
      this.removeNameKey(value);
      this.SelectLevelBand = value;
    },
    storeEquippeds(value) {
      this.removeNameKey(value);
      this.SelectEquipped = value;
    },
    storeJobClass(value) {
      this.removeNameKey(value);
      this.SelectJobClass = value;
    },
    filteringArray(array) {
      const AAR_Ver = 2;
      return array.filter(element => {
        return (
          element.versionCode ===
          (this.SelectExpansion.version
            ? this.SelectExpansion.version
            : AAR_Ver)
        );
      });
    },
    removeNameKey(object) {
      delete object.name;
    }
  }
};
</script>

<style lang="scss" scoped>
.CraftRecipe {
  box-sizing: border-box;
  margin: 0 2%;
  width: auto;
  box-sizing: border-box;
  @media screen and (min-width: 481px) {
    width: 60vw;
    margin-left: 12.5%;
    max-width: 960px;
  }

  &__Container {
    display: flex;
    flex-flow: column nowrap;
    @media screen and (min-width: 481px) {
      flex-flow: row nowrap;
    }
  }

  %Detail {
    box-sizing: border-box;
    padding-top: 0px;
    padding-bottom: 0px;
  }

  &__CategoryDetail {
    @extend %Detail;
    width: 100%;
    @media screen and (min-width: 481px) {
      position: sticky;
      top: 10px;
      margin-right: 5px;
      height: 300px;
      max-width: 250px;
    }
  }

  &__Expansion {
    @extend %Detail;
    width: 100%;
  }

  &__RecipeDetail {
    margin: 10px 5px 10px 5px;
    @media screen and (min-width: 481px) {
      width: 70vw;
      max-width: 700px;
      margin: 5px 5px 10px 5px;
    }
  }
}
</style>
