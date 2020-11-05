<template>
  <span class="Base__Span">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "BaseSpan",
  props: {
    text: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.Base__Span {
  font-size: $font_SecondaryMedium;
}
</style>
