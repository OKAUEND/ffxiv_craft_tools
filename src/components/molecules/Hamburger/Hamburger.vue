<template>
  <atom-semicircular-button class="Hamburger" @click="clickEvent()">
    <div class="Hamburger__Parts"></div>
    <div class="Hamburger__Parts"></div>
    <div class="Hamburger__Parts"></div>
  </atom-semicircular-button>
</template>

<script>
import AtomSemicircularButton from "@/components/atoms/Button/SemiRadius.vue";
export default {
  name: "Hamburger",
  components: {
    AtomSemicircularButton
  },
  methods: {
    clickEvent() {
      return this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scoped>
.Hamburger__Parts {
  position: absolute;
  width: 20px;
  height: 4px;
  right: 3px;
  top: 13px;
  background-color: #d1d1d1;
  border-radius: 4px;

  &:nth-of-type(2) {
    top: 23px;
  }

  &:nth-of-type(3) {
    top: 33px;
  }
}
</style>
