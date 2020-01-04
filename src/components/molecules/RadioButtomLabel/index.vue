<template>
  <label v-bind:for="CategoryState.formID" v-bind:class="Stylies">
    <template v-if="CategoryState.isIcon">
      <img v-bind:src="CategoryImagePath" />
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
import InputRadio from "@/components/atoms/Input/Radio.vue";
export default {
  name: "RadioButtomLabel",
  components: {
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
