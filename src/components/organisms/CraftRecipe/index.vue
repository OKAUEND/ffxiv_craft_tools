<template>
  <article class="Recipewarapper">
    <section class="Recipe-container">
      <section class="Expansion"></section>
      <section class="ChoiceDetail">
        <div class="job filter-container"></div>
        <div class="Equippedjob filter-container"></div>
        <div class="level filter-container"></div>
        <div class="Secretbook filter-container"></div>
      </section>
    </section>
    <section class="RecipeLists"></section>
  </article>
</template>

<script>
import CategoriesList from "@/components/molecules/CategoriesList/index.vue";
import { Icons, LevelArray } from "@/testData.js";
export default {
  name: "Oraganisms_CraftRecipe",
  components: {
    CategoriesList
  },
};
</script>

<style lang="scss" scoped>
.Recipewarapper {
}
.Recipe-container {
}
.Expansion {
}
.ChoiceDetail {
}

.filter-container {
}
</style>