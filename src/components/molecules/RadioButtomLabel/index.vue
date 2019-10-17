<template>
  <div class="button-design">
    <input type="radio" v-bind:id="createLabelForTags" />
    <label v-bind:for="createLabelForTags" v-on:click="emitData">{{ LabelText }}</label>
  </div>
</template>

<script>
export default {
  name: "RadioButtomLabel",
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
    LabelText() {
      if (this.isLevel) {
        return this.value.lowerLevel + "~" + this.value.upperLevel;
      } else {
        return this.value.name;
      }
    },
    createLabelForTags() {
      return this.typecode + this.value.ID;
    }
  },
  methods: {
    emitData() {
      return this.$emit("select-buttom-click", this.value);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>