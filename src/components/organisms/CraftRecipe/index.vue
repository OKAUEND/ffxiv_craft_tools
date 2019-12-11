<template>
  <article class="CraftRecipe">
    <div class="CraftRecipe__Container">
      <div class="CraftRecipe__Expansion">
      <expansion-group
          v-bind:Categories="Expansions"
        v-on:change="storeSelectExpansion"
      ></expansion-group>
      </div>
    </div>
    <div class="CraftRecipe__Container">
      <section class="CraftRecipe__CategoryDetail">
        <category-group v-bind:Categories="CrafterJobs">CLASS</category-group>
        <category-group v-bind:Categories="Equippeds">Equipped</category-group>
        <category-group v-bind:Categories="Levels" v-bind:isStoreUse="true">
          LEVEL
        </category-group>
        <category-group
          v-bind:Categories="MasterRecipes"
          v-bind:isStoreUse="true"
        >
          Master
        </category-group>
      </section>
      <section class="CraftRecipe__RecipeDetail">
        <recipe-list></recipe-list>
      </section>
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
      SelectExpansion: {}
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
    }
  },
  methods: {
    storeSelectExpansion(value) {
      this.SelectExpansion = value;
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
    }
  }
};
</script>

<style lang="scss" scoped>
.CraftRecipe {
  box-sizing: border-box;
  background-color: #202020;
  margin: 0 auto;
  width: 100vw;
  box-sizing: border-box;
  @media screen and (min-width: 481px) {
    width: 60vw;
  }

  &__Container {
    display: flex;
    flex-flow: column nowrap;
    @media screen and (min-width: 481px) {
      flex-flow: row nowrap;
    }
  }

  %__CategoryDetail {
    box-sizing: border-box;
    padding-top: 0px;
    padding-bottom: 0px;
    width: 100vw;
    @media screen and (min-width: 481px) {
      padding: 5px;
      width: 25vw;
    }
  }

  &__Expansion {
    @extend %__CategoryDetail;
  }

  &__CategoryDetail {
    @extend %__CategoryDetail;
  }

  &__RecipeDetail {
    padding: 10px 5px 10px 5px;
    width: 100vw;
    @media screen and (min-width: 481px) {
    width: 70vw;
    @media screen and (min-width: 481px) {
      width: 100vw;
    }
  }
}
</style>
