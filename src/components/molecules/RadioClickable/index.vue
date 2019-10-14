<template>
  <div class="button-design">{{ HeadText }}</div>
</template>

<script>
export default {
  name: "RadioClickable",
  props: {
    typecode: {
      type: String,
      required: true
    },
    value: {
      type: Object,
      required: true
    }
  },
};
</script>

<style lang="scss" scoped>
</style>