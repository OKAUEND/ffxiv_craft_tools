<template>
  <span class="Atom__Span--Medium">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "SpanMedium"
};
</script>

<style lang="scss" scoped>
.Atom__Span--Medium {
  font-size: $font_Medium;
}
</style>
