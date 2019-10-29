<template>
  <div class="button-design">
    <input type="radio" v-bind:id="classState.formID" />
    <label v-bind:for="classState.formID" v-on:click="emitData">
      <template v-if="classState.isIcon">
        <img v-bind:src="imagePath" />
      </template>
      <template v-else>{{ classState.Label }}</template>
    </label>
  </div>
</template>

<script>
export default {
  name: "RadioButtomLabel",
  props: {
    ClassStateObject: {
      type: Object,
      required: true
    }
  },
  computed: {
    classState: {
      get() {
        return this.ClassStateObject;
      }
    },
    imagePath: {
      get() {
        return this.classState.Label;
      }
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