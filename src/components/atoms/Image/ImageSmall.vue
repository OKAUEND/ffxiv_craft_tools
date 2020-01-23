<template>
  <img :src="path" :alt="comment" class="Atom__Image--Small" />
</template>

<script>
import Base from "./Base";
export default {
  mixins: [Base]
};
</script>

<style lang="scss">
.Atom__Image--Small {
  width: 25px;
  height: 25px;
}
</style>
