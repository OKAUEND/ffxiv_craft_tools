<template>
  <font-awesome-icon
    class="Atom__ListIcon"
    :icon="['fas', 'clipboard']"
    size="2x"
  />
</template>

<script>
export default {
  name: "List"
};
</script>

<style lang="scss" scoped>
.Atom__ListIcon {
  color: $palette_white;
}
</style>
