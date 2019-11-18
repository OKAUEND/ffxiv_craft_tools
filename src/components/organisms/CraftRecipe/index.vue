<template>
  <article class="Recipewarapper">
    <section class="select-container">
      <expansion-group v-bind:Expansions="Expansions"></expansion-group>
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
export default {
  name: "Oraganisms_CraftRecipe",
  components: {
    ExpansionGroup,
    CategoryGroup
  },
  computed: {
    CrafterJobs: {
      get() {
        return Icons;
      }
    },
    Levels: {
      get() {
        return LevelArray;
      }
    },
    MasterRecipes: {
      get() {
        return Masterbook;
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
  }
};
</script>

<style lang="scss" scoped>
.CategoryDetail {
  background-color: #202020;
  padding: 5px;
}
</style>
