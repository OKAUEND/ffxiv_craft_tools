<template>
  <font-awesome-icon
    class="Atom__BackIcon"
    :icon="['fas', 'chevron-left']"
    size="2x"
  />
</template>

<script>
export default {
  name: "BackIcon"
};
</script>

<style lang="scss" scoped>
.Atom__BackIcon {
  color: $palette_white;
}
</style>
