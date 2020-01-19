<template>
  <div class="ResultIndividual">
    <div class="ResultIndividual__Title">
      <atom-image></atom-image>
      <atom-span><strong>エクスアラガン・スピニングホイール</strong></atom-span>
    </div>
    <div class="ResultIndividual__List">
      <div class="ResultIndividual__Item">
        <atom-image></atom-image>
        <atom-span>:9999</atom-span>
      </div>
      <div class="ResultIndividual__Item">
        <atom-image></atom-image>
        <atom-span>:999</atom-span>
      </div>
      <div class="ResultIndividual__Item">
        <atom-image></atom-image>
        <atom-span>:99</atom-span>
      </div>
      <div class="ResultIndividual__Item">
        <atom-image></atom-image>
        <atom-span>:9</atom-span>
      </div>
      <div class="ResultIndividual__Item">
        <atom-image></atom-image>
        <atom-span>:0</atom-span>
      </div>
      <div class="ResultIndividual__Item">
        <atom-image></atom-image>
        <atom-span>:0</atom-span>
      </div>
      <div class="ResultIndividual__Item">
        <atom-image></atom-image>
        <atom-span>:0</atom-span>
      </div>
    </div>
    <div class="ResultIndividual__Pagenation"></div>
  </div>
</template>

<script>
import AtomImage from "@/components/atoms/Image/ImageMedium.vue";
import AtomSpan from "@/components/atoms/Text/Span.vue";
export default {
  name: "IndividualDetail",
  components: {
    AtomImage,
    AtomSpan
  }
};
</script>

<style lang="scss" scoped>
.ResultIndividual {
  margin: 0 2%;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: $palette_white;
  justify-content: center;
  align-items: center;

  &__Title {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (min-width: $breakpoint_tab_lower_limit) {
      justify-content: center;

      & > :first-child {
        margin-right: 10px;
      }
    }
  }

  &__List {
    margin-right: 20%;
    margin-left: 20%;
    flex: 1;
    @media screen and (min-width: $breakpoint_tab_lower_limit) {
      margin-right: 0;
      margin-left: 0;
      min-width: 500px;
    }
  }

  &__Item {
    display: flex;
    align-items: center;
    margin-top: 5px;

    & > :first-child {
      margin-right: auto;
    }

    & > :last-child {
      text-align: left;
      min-width: 60px;
    }
  }

  &__Pagenation {
    background-color: aquamarine;
    height: 60px;
    width: 100%;
  }
}
</style>
