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
  computed: {
    isLevel() {
      return this.typecode === "Level";
    },
    HeadText() {
      if (this.isLevel) {
        return this.value.lowerLevel + "~" + this.value.upperLevel;
      } else {
        return this.value.name;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>