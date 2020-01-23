<template>
  <article class="About">
    <section class="About__Licence">
      <h1 class="About__Heading ">権利表記</h1>
      <div class="About__FFXIV">
        <atom-image :path="'ffxiv.png'"></atom-image>
        Copyright (C) 2010 - 2020 SQUARE ENIX CO., LTD. AllRightsReserved.
      </div>
    </section>
  </article>
</template>

<script>
import AtomImage from "@/components/atoms/Image/ImageMedium.vue";
import AtomSpan from "@/components/atoms/Text/SpanSmall.vue";
export default {
  name: "AboutIndex",
  components: {
    AtomImage,
    AtomSpan
  }
};
</script>

<style lang="scss" scoped>
.About {
  height: 100%;
  margin: 0 2%;
  color: $palette_white;

  &__Licence {
    display: flex;
    flex-direction: column;
  }

  &__Heading {
    text-align: center;
    font-size: $font_Large;
  }

  &__FFXIV {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 11px;
  }
}
</style>
