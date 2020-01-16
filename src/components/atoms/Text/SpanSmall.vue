<template>
  <span class="Atom__Span--Small">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "SpanSmall"
};
</script>

<style lang="scss" scoped>
.Atom__Span--Small {
  width: 100%;
  display: inline-block;
  font-size: $font_Small;
}
</style>
