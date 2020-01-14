<template>
  <label v-bind:for="CategoryState.formID" v-bind:class="Stylies">
    <template v-if="CategoryState.isIcon">
      <atom-image v-bind:src="CategoryImagePath" />
    </template>
    <template v-else>{{ CategoryState.Label }}</template>
    <input-radio
      class="input-Radio--hidden"
      :id="CategoryState.formID"
      :value="CategoryState.Name"
      @input="radioButtonValue"
    ></input-radio>
  </label>
</template>

<script>
import AtomImage from "@/components/atoms/Image/ImageMedium.vue";
import InputRadio from "@/components/atoms/Input/Radio.vue";
export default {
  name: "RadioButtomLabel",
  components: {
    AtomImage,
    InputRadio
  },
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
@mixin category_margin {
  margin-right: 5px;
  margin-bottom: 5px;
}

.category-area__image {
  position: relative;
  display: inline-block;
  height: 40px;
  width: 40px;
  @include category_margin;

  &.Radio__Icon--checkmark {
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
      border: solid #3f74b1;
      border-width: 0 7px 7px 0;
      transform: rotate(45deg);
    }
  }
}

.category-area__Normal {
  position: relative;
  display: inline-block;
  height: 30px;
  width: 65px;
  text-align: center;
  line-height: 30px;
  color: #f8f9fa;
  background-color: #2b2b2b;
  border-radius: 2px;
  @include category_margin;

  &.Radio__Normal--checkmark {
    &::before {
      content: "";
      display: block;
      position: absolute;
      background: #27272771;
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
      border: solid #3f74b1;
      border-width: 0 7px 7px 0;
      transform: rotate(45deg);
    }
  }
}
</style>
