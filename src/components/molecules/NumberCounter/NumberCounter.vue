<template>
  <div>
    <atom-form-button :RadiusMode="2" @click="Decrement()">
      -
    </atom-form-button>
    <atom-number
      class="Input-Number__Counter"
      :value="value"
      @input="InputEvent()"
    ></atom-number>
    <atom-form-button :RadiusMode="1" @click="Increment()">
      +
    </atom-form-button>
  </div>
</template>

<script>
import AtomFormButton from "@/components/atoms/Button/FormButton.vue";
import AtomNumber from "@/components/atoms/Input/Number.vue";
export default {
  name: "NumberCounter",
  components: {
    AtomFormButton,
    AtomNumber
  },
  props: {
    value: {
      type: [Number, String],
      required: true
    }
  },
  methods: {
    Decrement() {
      return this.$emit("onDecrement");
    },
    Increment() {
      return this.$emit("onIncrement");
    },
    InputEvent(value) {
      return this.$emit("input", value);
    }
  }
};
</script>

<style lang="scss" scoped>
.NumberCounter {
  display: flex;
  flex-flow: row nowrap;
}
</style>
