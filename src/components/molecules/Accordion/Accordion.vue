<template>
  <div :class="RootClassName">
    <atom-label-style @click="switchLabelClicked()">
      <slot name="Text"></slot>
    </atom-label-style>
    <div :class="ChildListName">
      <slot name="Child"></slot>
    </div>
  </div>
</template>

<script>
import AtomLabelStyle from "@/components/atoms/Button/LabelStyleMedium.vue";
export default {
  name: "Accordion",
  components: {
    AtomLabelStyle
  },
  props: {
    isResponsiveMode: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isClick: false
    };
  },
  computed: {
    isOpen() {
      return {
        "--Opend": this.isClick
      };
    },
    RootClassName() {
      return {
        Accordion: this.isResponsiveMode === false,
        "Accordion-Responsive": this.isResponsiveMode === true
      };
    },
    ChildListName() {
      return {
        Accordion__List:
          this.isResponsiveMode === false && this.isClick === false,
        "Accordion__List --Opend":
          this.isResponsiveMode === false && this.isClick === true,
        "Accordion-Responsive__List":
          this.isResponsiveMode === true && this.isClick === false,
        "Accordion-Responsive__List --Opend":
          this.isResponsiveMode === true && this.isClick === true
      };
    }
  },
  methods: {
    switchLabelClicked() {
      this.isClick = !this.isClick;
    }
  }
};
</script>

<style lang="scss" scoped>
.Accordion {
  &__List {
    max-height: 0;
    transition: max-height 0.15s ease-out;
    overflow: hidden;
    &.--Opend {
      max-height: 200px;
      transition: max-height 0.25s ease-in;
    }
  }
}

.Accordion-Responsive {
  & > .Atom__LabelStyle--Medium {
    @media screen and(min-width: 481px) {
      display: none;
    }
  }

  &__List {
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
}
</style>
