<template>
  <img :src="path" :alt="comment" />
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true
    },
    comment: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
.Atom-Image {
  &__Icon {
    &--Medium {
      width: 50px;
      height: 50px;
    }

    &--Small {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
