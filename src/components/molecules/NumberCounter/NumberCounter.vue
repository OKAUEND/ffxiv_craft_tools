<template>
  <div class="NumberCounter">
    <atom-button class="Atom-Button__Counter--Left" @click="Decrement()">
      -
    </atom-button>
    <atom-number
      class="Input-Number__Counter"
      :value="value"
      @input="InputEvent()"
    ></atom-number>
    <atom-button class="Atom-Button__Counter--Right" @click="Increment()">
      +
    </atom-button>
  </div>
</template>

<script>
import AtomButton from "@/components/atoms/Button/Button.vue";
import AtomNumber from "@/components/atoms/Input/Number.vue";
export default {
  name: "NumberCounter",
  components: {
    AtomButton,
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
