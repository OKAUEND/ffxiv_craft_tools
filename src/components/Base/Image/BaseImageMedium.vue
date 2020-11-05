<template>
  <img :src="path" :alt="comment" class="Base__Image--Medium" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Props {
  path: String;
}

export default defineComponent({
  name: "BaseImageMedium",
  props: {
    path: {
      type: String,
      required: true,
    },
  },
  setup(props: Props) {
    props.path;
  },
});
</script>

<style lang="scss">
.Base__Image--Medium {
  width: 40px;
  height: 40px;
}
</style>
