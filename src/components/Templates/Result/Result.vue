<template>
  <div class="Result">
    <nav class="Result__Nav">
      <div class="Result__CenterNav">
        <atom-list-icon />
        <atom-list-all-icon />
      </div>
    </nav>
    <div class="Result__Body"></div>
  </div>
</template>

<script>
import AtomListIcon from "@/components/atoms/Icon/List.vue";
import AtomListAllIcon from "@/components/atoms/Icon/ListALL.vue";
import IndividualDetail from "@/components/organisms/ResultDetail/IndividualDetail.vue";
export default {
  name: "ResultIndex",
  components: {
    AtomListIcon,
    AtomListAllIcon,
    IndividualDetail
  }
};
</script>

<style lang="scss" scoped>
.Result {
  height: 100%;
  display: flex;
  flex-direction: column;

  &__Nav {
    height: 60px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 1px $Palette_black;
  }

  &__CenterNav {
    min-width: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media screen and (min-width: $breakpoint_tab_lower_limit) {
      min-width: 200px;
    }
  }

  &__Body {
    margin-top: 20px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>
