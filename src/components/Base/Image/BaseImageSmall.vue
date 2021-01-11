<template>
  <img :src="path" :alt="comment" class="BaseImage--Small" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Props {
  path: string;
  comment: string;
}

export default defineComponent({
  name: "BaseImageSmall",
  props: {
    path: {
      type: String,
      required: true,
    },
    comment: {
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
.BaseImage--Small {
  width: 25px;
  height: 25px;
}
</style>
