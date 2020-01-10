<template>
  <div>
    <atom-button class="NumberCounter__Decrement" @click="Decrement()">
      -
    </atom-button>
    <atom-number
      class="Input-Number__Counter"
      :value="value"
      @input="InputEvent()"
    ></atom-number>
    <atom-button class="NumberCounter__Increment" @click="Increment()">
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
@mixin CounterBtn {
  width: 30px;
  height: 40px;
  background-color: #8a8a8a;
}

.NumberCounter {
  display: flex;
  flex-flow: row nowrap;

  & > .NumberCounter__Decrement {
    @include CounterBtn;
    border-radius: 5px 0px 0px 5px;
  }
  & > .NumberCounter__Increment {
    @include CounterBtn;
    border-radius: 0px 5px 5px 0px;
  }

  &--small {
    display: grid;
    grid-template-columns: 40px 20px;
    grid-template-rows: 15px 15px;
    width: 80px;

    & > .NumberCounter__Decrement {
      grid-column: 2/3;
      grid-row: 2/3;
      width: 100%;
      height: 100%;
      border-radius: 0px 0px 5px 0px;
    }

    & > .NumberCounter__Increment {
      grid-column: 2/3;
      grid-row: 1/2;
      width: 100%;
      height: 100%;
      border-radius: 0px 5px 0px 0px;
    }

    & > .Input-Number__Counter {
      grid-column: 1 / 2;
      grid-row: 1 / 3;
      border-radius: 5px 0px 0px 5px;
    }
  }
}
</style>
