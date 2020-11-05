<template>
  <div class="AccordionSmall">
    <atom-label-style @click="switchLabelClicked()">
      <slot name="Text"></slot>
    </atom-label-style>
    <div :class="ChildListName">
      <slot name="Child"></slot>
    </div>
  </div>
</template>

<script>
import AtomLabelStyle from "@/components/atoms/Button/LabelStyleSmall.vue";
export default {
  name: "Accordion",
  components: {
    AtomLabelStyle,
  },
  props: {
    isResponsiveMode: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isClick: false,
    };
  },
  computed: {
    isOpen() {
      return {
        "--Opend": this.isClick,
      };
    },
    ChildListName() {
      return {
        AccordionSmall__List:
          this.isResponsiveMode === false && this.isClick === false,
        "AccordionSmall__List --Opend":
          this.isResponsiveMode === false && this.isClick === true,
      };
    },
  },
  methods: {
    switchLabelClicked() {
      this.isClick = !this.isClick;
    },
  },
};
</script>

<style lang="scss" scoped>
.AccordionSmall {
  background-color: $palette_bright-gray;
  border-radius: 5px;

  & > :first-child {
    text-align: center;
  }

  &__List {
    border-top: solid 1px $palette_translucent-gray;
    max-height: 0;
    transition: max-height 0.15s ease-out;
    overflow: hidden;
    &.--Opend {
      max-height: 200px;
      transition: max-height 0.25s ease-in;
    }
  }
}
</style>
