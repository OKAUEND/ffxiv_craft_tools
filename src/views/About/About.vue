<template>
  <article class="About">
    <section class="About__Section">
      <h1 class="About__Heading">当サイトについて</h1>
      <div class="About__Child">
        当サイトはFFXIVのクラフターの製作での必要アイテム個数管理などを補助するためのWebサイトです。
      </div>
    </section>
    <section class="About__Section">
      <h1 class="About__Heading">LICENCE</h1>
      <div class="About__Child">
        <atom-image :path="'ffxiv.png'"></atom-image>
        Copyright (C) 2010 - 2020 SQUARE ENIX CO., LTD. AllRightsReserved.
      </div>
    </section>
    <section class="About__Section">
      <h1 class="About__Heading">Framework</h1>
      <div class="About__Child">
        <atom-image :path="'vue.png'"></atom-image>
      </div>
    </section>
  </article>
</template>

<script>
import AtomImage from "@/components/atoms/Image/ImageMedium.vue";
export default {
  name: "AboutIndex",
  components: {
    AtomImage
  }
};
</script>

<style lang="scss" scoped>
.About {
  height: 100%;
  margin: 0 2%;
  color: $palette_white;

  &__Section {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid $palette_gray;
  }

  &__Heading {
    text-align: center;
    font-size: $font_Large;
  }

  &__Child {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 11px;
  }
}
</style>
