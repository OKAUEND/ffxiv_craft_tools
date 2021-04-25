<template>
  <div class="result">
    <component :is="showComponent" />
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

import NoSelectedMsg from "@/components/Pages/ErrorAnnounce/NoSelectedItem.vue";
export default defineComponent({
  component: {
    NoSelectedMsg,
  },
  setup(context: SetupContext) {
    const router = useRouter();
    const state = useStore();

    const hasSelectLog = state.getters.getCartsLength === 0;

    const showComponent = hasSelectLog ? "" : NoSelectedMsg;

    return { showComponent };
  },
});
</script>

<style lang="scss" scoped>
.result {
  height: 100%;
  display: flex;
  flex-direction: column;

  &__Nav {
    height: 60px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow: 1px $palette_black;
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
    flex: 1;
  }
}
</style>
