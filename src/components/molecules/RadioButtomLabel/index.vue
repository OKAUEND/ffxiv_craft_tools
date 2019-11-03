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

}

.category-area-Normal {
  position: relative;
  display: inline-block;
  height: 30px;
  width: 55px;
  text-align: center;
  line-height: 30px;
  background-color: #272727;
  color: #faebd7;
  border-radius: 2px;

}
</style>
