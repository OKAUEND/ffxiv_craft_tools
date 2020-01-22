<template>
  <div class="ResultWhole">
    <div class="ResultWhole__Item">
      <atom-image> </atom-image> <atom-span>:10</atom-span>
    </div>
    <div class="ResultWhole__Item">
      <atom-image> </atom-image> <atom-span>:10</atom-span>
    </div>
  </div>
</template>

<script>
import AtomImage from "@/components/atoms/Image/ImageMedium.vue";
export default {
  name: "WholeDetail.vue",
  components: {
    AtomImage
  }
};
</script>

<style lang="scss" scoped>
.ResultWhole {
  margin: 0 2%;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: $palette_white;
  align-items: center;

  &__Item {
    display: flex;
    align-items: center;
    margin-top: 5px;
    min-width: 70%;

    & > :first-child {
      margin-right: auto;
    }

    & > :last-child {
      text-align: left;
      min-width: 60px;
    }
  }
}
</style>
