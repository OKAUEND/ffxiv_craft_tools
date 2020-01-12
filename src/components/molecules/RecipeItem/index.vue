<template>
  <div class="RecipeItem">
    <div class="RecipeItem__image">
      <!-- 製作物のアイコン -->
      <atom-image
        :path="`static/CRAFTER/Alchemist.png`"
        :comment="`ItemIcon`"
      ></atom-image>
    </div>
    <!-- レベルとアイテム名と素材 -->
    <div class="RecipeItem__itemName">
      <!-- レベルとアイテム名 -->
      <atom-span
        class="Atom-span__Name--Medium"
        :text="RecipeStates.Name"
      ></atom-span>
    </div>
    <div class="RecipeItem__childlist">
      <!-- 素材の種類と素材数 -->
      <div
        v-for="ChildRecipe of RecipeStates.ChildList"
        :key="ChildRecipe.id"
        class="RecipeItem__childItems"
      >
        <atom-image-small
          :path="ChildRecipe.ImagePath"
          :comment="`ItemIcon`"
          class=""
        ></atom-image-small>
        <atom-span :text="ChildRecipe.fromRequiredMaterialValue"></atom-span>
      </div>
    </div>
    <div class="RecipeItem__form">
      <!-- 個数ボタン 
        対応1~999までとする-->
      <number-counter
        :value="ProductValue"
        @onDecrement="Decrement()"
        @onIncrement="Increment()"
        @input="Update()"
        class="NumberCounter"
      ></number-counter>
    </div>
    <div class="RecipeItem__AddBlock">
      <atom-button-orange @click="emitRecipeDetail()">
        ADD
      </atom-button-orange>
    </div>
  </div>
</template>

<script>
// Atom
import AtomSpan from "@/components/atoms//Text/Span.vue";
import AtomImage from "@/components/atoms//Image/ImageMedium.vue";
import AtomImageSmall from "@/components/atoms/Image/ImageSmall.vue";
import AtomButtonOrange from "@/components/atoms/Button/ButtonOrange.vue";
//Mole
import NumberCounter from "@/components/molecules/NumberCounter/NumberCounter.vue";
// State Class
import { RecipeState } from "./RecipeState.js";
export default {
  name: "mole-productioncontent",
  components: {
    AtomSpan,
    AtomImage,
    AtomImageSmall,
    AtomButtonOrange,
    NumberCounter
  },
  data() {
    return {
      Count: 1
    };
  },
  props: {
    Recipe: {
      type: Object,
      required: true
    }
  },
  computed: {
    RecipeStates: {
      get() {
        return RecipeState.create(this.Recipe);
      }
    },
    ProductValue: {
      get() {
        return this.Count;
      },
      set(value) {
        if (this.isValid(value)) {
          this.Count = value;
        }
      }
    }
  },
  methods: {
    Increment() {
      this.ProductValue++;
    },
    Decrement() {
      this.ProductValue--;
    },
    Update(inputValue) {
      this.ProductValue = inputValue;
    },
    isValid(value) {
      const MinValue = 1;
      const MaxValue = 999;
      return value >= MinValue && MaxValue >= value;
    },
    emitRecipeDetail() {
      const RecipeDetail = this.RecipeStates.createRecipeObject;
      RecipeDetail["Count"] = this.ProductValue;
      return this.$emit("Add", RecipeDetail);
    }
  }
};
</script>

<style lang="scss" scoped>
.RecipeItem {
  display: grid;
  grid-template-columns: 0.5fr 2fr 1fr;
  grid-template-rows: 1.5fr 1fr;
  height: 125px;
  width: 100%;
  background-color: #131212;
  color: #fffffe;
  padding: 5px;
  margin-bottom: 5px;
  border-radius: 5px;

  @media screen and (min-width: 481px) {
    grid-template-columns: 0.5fr 2fr 0.75fr;
    grid-template-rows: 1.5fr 1fr;
  }

  %--flexCenter {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__image {
    @extend %--flexCenter;
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    flex-flow: column nowrap;

    @media screen and (min-width: 481px) {
      grid-column: 1 / 2;
      grid-row: 1 / 3;
    }
  }

  &__itemName {
    @extend %--flexCenter;
    grid-column: 2 / 4;
    grid-row: 1 / 2;
    flex-direction: row;
    @media screen and (min-width: 481px) {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
    }
  }

  &__childlist {
    display: none;
    @media screen and (min-width: 481px) {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      grid-column: 2/3;
      grid-row: 2/3;
      justify-content: flex-start;
    }
  }

  &__childItems {
    display: none;
    @media screen and (min-width: 481px) {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 2px;
      width: 55px;
    }
  }

  &__form {
    @extend %--flexCenter;
    grid-column: 2/3;
    grid-row: 2/3;
    @media screen and (min-width: 481px) {
      grid-column: 3/4;
      grid-row: 1/2;
      width: 100%;
      height: 100%;
    }
  }
  &__AddBlock {
    @extend %--flexCenter;
    grid-column: 3/4;
    grid-row: 2/3;
    padding: 3px 0px 3px 0px;
    @media screen and (min-width: 481px) {
      grid-column: 3/4;
      grid-row: 2/3;
    }
  }
}
</style>
