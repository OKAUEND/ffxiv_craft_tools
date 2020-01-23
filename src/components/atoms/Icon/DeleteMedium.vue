<template>
  <font-awesome-icon
    class="Atom__DeleteIcon"
    :icon="['fas', 'times']"
    size="2x"
  />
</template>

<script>
export default {
  name: "DeleteSmall"
};
</script>

<style lang="scss" scoped>
.Atom__DeleteIcon {
  color: $palette_white;
}
</style>
