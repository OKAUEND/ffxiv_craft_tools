<template>
  <label v-bind:for="CategoryState.formID" v-bind:class="Stylies">
    <template v-if="CategoryState.isIcon">
      <img v-bind:src="CategoryImagePath" />
    </template>
    <template v-else>{{ CategoryState.Label }}</template>
    <input
      class="radio-hidden"
      type="radio"
      v-bind:id="CategoryState.formID"
      v-bind:value="CategoryState.Name"
      v-model="radioButtonValue"
    />
  </label>
</template>
<script>
export default {
  name: "RadioButtomLabel",
  props: {
    ClassStateObject: {
      type: Object,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },
  computed: {
    CategoryState: {
      get() {
        return this.ClassStateObject;
      }
    },
    CategoryImagePath: {
      get() {
        return this.CategoryState.Label;
      }
    },
    radioButtonValue: {
      set() {
        return this.$emit("change", this.CategoryState.fromSelectedData);
      },
      get() {
        return this.value;
      }
    },
    Stylies: {
      get() {
        return this.CategoryState.LabelStyle(this.value);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.radio-hidden {
  display: none;
}
.category-area-image {
  position: relative;
  display: inline-block;
  height: 40px;
  width: 40px;

  &.Icon-radio-checkmark {
    &::before {
      content: "";
      display: block;
      position: absolute;
      background: #33333380;
      width: 40px;
      height: 40px;
      border-radius: 5px;
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 10px;
      height: 22px;
      top: 2px;
      left: 30%;
      border: solid #78b13f;
      border-width: 0 7px 7px 0;
      transform: rotate(45deg);
    }
  }
}

.category-area-Normal {
  position: relative;
  display: inline-block;
  height: 30px;
  width: 65px;
  text-align: center;
  line-height: 30px;
  background-color: #272727;
  color: #faebd7;
  border-radius: 2px;

  &.Normal-radio-checkmark {
    &::before {
      content: "";
      display: block;
      position: absolute;
      background: #33333380;
      height: 30px;
      width: 65px;
      border-radius: 5px;
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 10px;
      height: 18px;
      top: -1px;
      left: 30%;
      border: solid #78b13f;
      border-width: 0 7px 7px 0;
      transform: rotate(45deg);
    }
  }
}
</style>
