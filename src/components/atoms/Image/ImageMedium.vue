<template>
  <img :src="path" :alt="comment" class="Atom__Image--Medium" />
</template>

<script>
import Base from "./Base.js";
export default {
  mixins: [Base]
};
</script>

<style lang="scss">
.Atom__Image--Medium {
  width: 40px;
  height: 40px;
}
</style>
