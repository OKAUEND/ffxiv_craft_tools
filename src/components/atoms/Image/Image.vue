<template>
  <img :src="path" :alt="comment" class="AtomImage" />
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
.AtomImage {
  &.--Medium {
    width: 50px;
    height: 50px;
  }

  &.--Small {
    width: 30px;
    height: 30px;
  }
}
</style>
