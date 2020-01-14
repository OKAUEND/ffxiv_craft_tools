<template>
  <label v-bind:for="CategoryState.formID" v-bind:class="Stylies">
    <slot name="label"></slot>
    <input-radio
      :id="CategoryState.formID"
      :inputValue="CategoryState.Name"
      :value="radioButtonValue"
      @input="onRadioClick()"
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
  },
  methods: {
    onRadioClick() {
      return this.$emit("change", this.CategoryState.fromSelectedData);
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

@mixin ExpansionBase {
  position: relative;
  display: inline-block;
  height: 30px;
  line-height: 30px;
  width: 100%;
  font-size: $font_SecondaryMedium;
  text-align: center;
  color: $palette_white;
  background: $palette_translucent-gray;

  @media screen and (min-width: 481px) {
    height: 60px;
    width: 90px;
    line-height: 60px;
    font-size: $font_Large;
    background-color: $Palette_black;
  }

  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    height: 30px;
    width: 100%;
    top: 0px;
    left: 0px;
    transition: opacity all 300ms 0s ease;
    opacity: 0;
    @media screen and (min-width: 481px) {
      height: 60px;
      width: 90px;
    }
  }
}

.Expansion {
  &__ARealReborn {
    @include ExpansionBase;
    &::after {
      border-left: 5px solid $palette_ARealReborn;
    }
  }
  &__Heavensward {
    @include ExpansionBase;
    &::after {
      border-left: 5px solid $palette_Heavensward;
    }
  }
  &__Stormblood {
    @include ExpansionBase;
    &::after {
      border-left: 5px solid $palette_Stormblood;
    }
  }
  &__Shadowbringers {
    @include ExpansionBase;
    &::after {
      border-left: 5px solid $palette_Shadowbringers;
    }
  }
  &.--checked {
    &::after {
      opacity: 1;
    }
  }
}
</style>
