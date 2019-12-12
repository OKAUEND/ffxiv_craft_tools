<template>
  <section class="RecipeList">
    <recipe-item></recipe-item>
  </section>
</template>

<script>
import axios from "axios";
import RecipeItem from "@/components/molecules/RecipeItem/index.vue";
export default {
  components: {
    RecipeItem
  },
  data() {
    return {
      Recipes: []
    };
  },
  async created() {
    try {
    } catch (e) {
      console.error(e);
    }
  }
};
</script>

<style lang="scss" scoped>
.RecipeList {
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  width: 100%;
  padding: 0 10px 0 10px;
  box-sizing: border-box;
}
</style>
