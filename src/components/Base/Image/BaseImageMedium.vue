<template>
  <img :src="path" :alt="comment" class="BaseImage--Medium" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Props {
  path: string;
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
.BaseImage--Medium {
  width: 88px;
  height: 88px;
}
</style>
