<template>
  <div class="RecipeItem">
    <div class="RecipeItem__image">
      <!-- 製作物のアイコン -->
      <!-- <item-image v-bind:img_path="ItemData.ImagePath" class="--medium"></item-image> -->
      <div class="kariimg"></div>
      <!-- <span class="__text">IL470</span> -->
    </div>
    <!-- レベルとアイテム名と素材 -->
    <div class="RecipeItem__title">
      <!-- レベルとアイテム名 -->
      <!-- <head-string v-bind:Text="ItemData.Name" Level="2"></head-string>
      <span-text v-bind:Text="CreatingItemLevel()" class="--bottom"></span-text>-->
      <span>ミーンストライカースピア</span>
    </div>
    <div class="RecipeItem__childlist">
      <!-- 素材の種類と素材数 -->
      <!-- <div v-for="item of ItemData.ChildItem" :key="item.id" class="childitems"></div> -->
      <div class="RecipeItem__childItems">
        <div class="miniimg"></div>
        <span>×5</span>
      </div>
      <div class="RecipeItem__childItems">
        <div class="miniimg"></div>
        <span>×5</span>
      </div>
      <div class="RecipeItem__childItems">
        <div class="miniimg"></div>
        <span>×5</span>
      </div>
      <div class="RecipeItem__childItems">
        <div class="miniimg"></div>
        <span>×5</span>
      </div>
      <div class="RecipeItem__childItems">
        <div class="miniimg"></div>
        <span>×5</span>
      </div>
      <div class="RecipeItem__childItems">
        <div class="miniimg"></div>
        <span>×5</span>
      </div>
    </div>
    <div class="RecipeItem__form">
      <div class="RecipeItem__block">
        <!-- 個数ボタン 
        対応1~999までとする-->
        <atom-button class="button --Left">-</atom-button>
        <!-- <atom-inputtext></atom-inputtext> -->
        <input type="text" class="kari" />
        <atom-button class="button --Right">+</atom-button>
      </div>
    </div>
  </div>
</template>

<script>
import AtomButton from "@/components/atoms/Button/Button.vue";
import AtomInputtext from "@/components/atoms/Input/Text.vue";
// State Class
import RecipeState from "./RecipeState.js";
export default {
  name: "mole-productioncontent",
  components: {
    AtomButton,
    AtomInputtext
  },
  // props: {
  //   Recipe: {
  //     type: Object,
  //     required: true
  //   }
  // },
  computed: {
    RecipeState: {
      get() {
        return RecipeState.create(this.Recipe);
      }
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
