<template>
  <img :src="path" :alt="comment" class="Base__Image--Small" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Props {
  path: string;
}

export default defineComponent({
  name: "BaseImageSmall",
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
.Base__Image--Small {
  width: 25px;
  height: 25px;
}
</style>
