<template>
  <article class="Recipewarapper">
    <section class="select-container">
      <expansion-group
        v-bind:Expansions="Expansions"
        v-on:change="storeSelectExpansion"
      ></expansion-group>
      <section class="CategoryDetail">
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
    </section>
    <section class="RecipeLists"></section>
  </article>
</template>

<script>
import CategoryGroup from "@/components/molecules/CategoryGroup/index.vue";
import ExpansionGroup from "@/components/molecules/ExpansionGroup/index.vue";
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
    CategoryGroup
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
.CategoryDetail {
  background-color: #202020;
  padding: 5px;
}
</style>
