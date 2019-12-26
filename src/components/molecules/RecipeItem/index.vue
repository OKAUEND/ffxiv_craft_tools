<template>
  <div class="RecipeItem">
    <div class="RecipeItem__image">
      <!-- 製作物のアイコン -->
      <atom-image
        :path="`static/CRAFTER/Alchemist.png`"
        :comment="`ItemIcon`"
        class="Atom-Img__Icon--Medium"
      ></atom-image>
    </div>
    <!-- レベルとアイテム名と素材 -->
    <div class="RecipeItem__title">
      <!-- レベルとアイテム名 -->
      <span>{{ RecipeStates.Name }}</span>
    </div>
    <div class="RecipeItem__childlist">
      <!-- 素材の種類と素材数 -->
      <div
        v-for="ChildRecipe of RecipeStates.ChildList"
        :key="ChildRecipe.id"
        class="RecipeItem__childItems"
      >
        <atom-image
          :path="ChildRecipe.ImagePath"
          :comment="`ItemIcon`"
          class="Atom-Img__Icon--Small"
        ></atom-image>
        <atom-span :text="ChildRecipe.fromRequiredMaterialValue"></atom-span>
      </div>
    </div>
    <div class="RecipeItem__form">
      <div class="RecipeItem__block">
        <!-- 個数ボタン 
        対応1~999までとする-->
        <atom-button class="Atom-Button__Counter--Left" @click="Decrement()">
          -
        </atom-button>
        <atom-number
          class="Input-Number__Counter"
          :value="ProductValue"
          @input="Update"
        ></atom-number>
        <atom-button class="Atom-Button__Counter--Right" @click="Increment()">
          +
        </atom-button>
      </div>
    </div>
    <div class="RecipeItem__Add">
      <atom-button class="Atom-Button__Add" @click="emitRecipeDetail()">
        Add
      </atom-button>
    </div>
  </div>
</template>

<script>
// Atom
import AtomSpan from "@/components/atoms//Text/Span.vue";
import AtomImage from "@/components/atoms//Image/Image.vue";
import AtomButton from "@/components/atoms/Button/Button.vue";
import AtomNumber from "@/components/atoms/Input/Number.vue";
// State Class
import RecipeState from "./RecipeState.js";
export default {
  name: "mole-productioncontent",
  components: {
    AtomSpan,
    AtomImage,
    AtomButton,
    AtomNumber
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
  grid-template-columns: 0.5fr 2fr 0.75fr;
  grid-template-rows: 1.5fr 1fr;
  height: 125px;
  width: 100%;

  @media screen and (max-width: 480px) {
    grid-template-columns: 0.5fr 2fr;
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
    background-color: brown;
    flex-flow: column nowrap;

    @media screen and (max-width: 480px) {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }
  }

  &__title {
    @extend %--flexCenter;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    background-color: cornflowerblue;
    flex-direction: row;
  }

  &__childlist {
    display: none;
    background-color: greenyellow;
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
    grid-column: 3/4;
    grid-row: 1/3;
    background-color: olive;
    @media screen and (max-width: 480px) {
      grid-column: 1/3;
      grid-row: 2/3;
    }
  }
  &__block {
    display: flex;
    flex-flow: row nowrap;
  }
}
</style>
