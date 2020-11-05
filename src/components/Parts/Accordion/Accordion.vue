<template>
  <div class="Accordion">
    <button
      class="AccordionButton"
      :class="isClick"
      @click="switchLabelClicked()"
    >
      <slot name="Text"></slot>
    </button>
    <div class="Accordion__Content" :class="isOpen">
      <slot name="Child"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "PartAccordion",
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
  },
  methods: {
    switchLabelClicked() {
      this.isClick = !this.isClick;
    },
  },
};
</script>

<style lang="scss" scoped>
.Accordion {
}

.AccordionButton {
  width: 100%;
  height: 100%;
  text-align: left;
  position: relative;
  color: $palette_white;
  background-color: transparent;
  font-size: $font_SecondaryMedium;
  font-weight: bold;
  text-align: left;
  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    width: 10px;
    height: 10px;
    top: 25%;
    right: 10%;
    border-right: 2px solid $palette_white;
    border-bottom: 2px solid $palette_white;
    transition: all 300ms 0s ease;
    transform: rotate(-45deg);
  }

  &.--Opend::after {
    transform: rotate(45deg);
  }
}

.Accordion__Content {
  max-height: 0;
  transition: max-height 0.15s ease-out;
  overflow: hidden;
  &.--Opend {
    max-height: 200px;
    transition: max-height 0.25s ease-in;
  }
  @media screen and (min-width: 481px) {
    max-height: 150px;
    overflow: auto;
  }
}
</style>
