<template>
  <article>
    <div class="header__Content">
      <div class="header__LeftNav">
        <div class="header__Logo"></div>
      </div>
      <div class="header__Nav">
        <div class="header__none">
          <!-- 検索バー -->
        </div>
        <div class="header__items">
          <cart-items></cart-items>
        </div>
        <div class="header__none">
          <!-- ABOUT -->
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import CartItems from "@/components/molecules/CartItems/CartItems.vue";
export default {
  name: "ffxiv_header",
  components: {
    CartItems
  }
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  background-color: $palette_bright-gray;

  &__Content {
    height: 100%;
    display: flex;
    flex-direction: row;
    @media screen and(min-width: 481px) {
      width: 80%;
      margin: 0 auto;
    }
  }

  &__LeftNav {
    margin-right: auto;
    @media screen and(min-width: 481px) {
      width: 400px;
    }
  }

  &__Logo {
    height: 100%;
    width: 60px;
    @media screen and(min-width: 481px) {
    }
  }

  &__Nav {
    height: 100%;
    width: 125px;
    display: flex;
    flex-direction: row;
    @media screen and(min-width: 481px) {
      grid-column: 2/3;
    }
  }

  &__none {
    width: 35px;
    height: 60px;
  }

  &__items {
    width: 50px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and(min-width: 481px) {
      width: 80px;
    }
  }
}
</style>
