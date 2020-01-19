<template>
  <div class="Result">
    <nav class="Result__Nav">
      <atom-image></atom-image>
      <atom-image> </atom-image>
    </nav>
    <div class="Result__Body"></div>
  </div>
</template>

<script>
import AtomImage from "@/components/atoms/Image/ImageMedium.vue";
export default {
  name: "ResultIndex",
  components: {
    AtomImage
  }
};
</script>

<style lang="scss" scoped>
.Result {
  height: 100%;
  display: flex;
  flex-direction: column;

  &__Nav {
    height: 60px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 1px $Palette_black;
  }

  &__Body {
    margin-top: 20px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>
