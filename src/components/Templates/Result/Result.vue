<template>
  <div class="Result">
    <nav class="Result__Nav">
      <div class="Result__LeftNav">
        <atom-back-icon />
      </div>
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
import AtomBackIcon from "@/components/atoms/Icon/Back.vue";
import IndividualDetail from "@/components/organisms/ResultDetail/IndividualDetail.vue";
import WholeDetail from "@/components/organisms/ResultDetail/WholeDetail.vue";
export default {
  name: "ResultIndex",
  components: {
    AtomListIcon,
    AtomListAllIcon,
    AtomBackIcon,
    WholeDetail
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
    align-items: center;
    box-shadow: 1px $Palette_black;
    padding-left: 10px;
    box-sizing: border-box;
  }

  &__LeftNav {
    position: absolute;
    width: 20px;
  }

  &__CenterNav {
    min-width: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
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
