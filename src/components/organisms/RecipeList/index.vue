<template>
  <div class="CraftRecipe__RecipeList">
    <recipe-item
      v-for="(Item, key) of Recipes"
      :key="key"
      :Recipe="Item"
      @Add="emitRecipeDetail()"
    ></recipe-item>
  </div>
</template>

<script>
import RecipeItem from "@/components/molecules/RecipeItem/index.vue";
export default {
  components: {
    RecipeItem
  },
  props: {
    Condition: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      Recipes: []
    };
  },
  //Firebaseと通信をしDBからデータを取得（したい場所）
  async created() {},
  methods: {
    emitRecipeDetail(RecipeObject) {
      return this.$emit("Add", RecipeObject);
    }
  }
};
</script>

<style lang="scss" scoped>
.CraftRecipe__RecipeList {
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  width: 100%;
  box-sizing: border-box;
  @media screen and (min-width: 481px) {
    padding: 0 10px 0 10px;
  }
}
</style>
