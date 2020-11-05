<template>
  <span class="Base__Span--Small">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "BaseSpanSmall",
  props: {
    text: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.Base__Span--Small {
  width: 100%;
  display: inline-block;
  font-size: $font_Small;
}
</style>
