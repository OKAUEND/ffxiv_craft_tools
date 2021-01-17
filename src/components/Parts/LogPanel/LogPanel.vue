<template>
  <div class="logpanel">
    <div class="logpanel__leftside">
      <base-image-medium
        :path="craftlog.imageurl"
        :comment="craftlog.text.name"
      />
    </div>
    <div class="logpanel__topview">
      <span>{{ craftlog.text.name }}</span>
    </div>
    <div class="logpanel__childlist">
      <div
        v-for="(child, order) in craftlog.childrenlogs"
        :key="order"
        class="logpanel__childItems"
      >
        <div v-if="child.isEnable">
          <base-image-small :path="child.imageurl" :comment="'child.name'" />
          <span>{{ child.value }}</span>
        </div>
      </div>
    </div>
    <div class="logpanel__announce">
      <button @click="onClickLog">追加</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, SetupContext } from "vue";
import { CraftLog } from "@/@types/FFXIVLogTypes";

import BaseImageMedium from "@/components/Base/Image/BaseImageMedium.vue";
import BaseImageSmall from "@/components/Base/Image/BaseImageSmall.vue";

interface Props {
  craftdata: CraftLog;
}

export default defineComponent({
  name: "LogPanel",
  components: {
    BaseImageMedium,
    BaseImageSmall,
  },
  props: {
    craftdata: {
      type: Object as PropType<CraftLog>,
      required: true,
    },
  },
  emits: ["click"],
  setup(props: Props, context: SetupContext) {
    const craftlog = computed(() => {
      return props.craftdata;
    });

    const onClickLog = () => {
      context.emit("click", craftlog);
    };

    return {
      craftlog,
      onClickLog,
    };
  },
});
</script>

<style lang="scss" scoped>
.logpanel {
  display: grid;
  grid-template-columns: 100px 2fr;
  grid-template-rows: 1fr 1fr 1fr;
  height: 160px;
  width: 100%;
  background-color: #131212;
  color: #fffffe;
  padding: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
  @media screen and (min-width: 481px) {
    grid-template-columns: 0.5fr 2fr 0.75fr;
    grid-template-rows: 1.5fr 1fr;
  }
  %--flexCenter {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logpanel__leftside {
    @extend %--flexCenter;
    grid-column: 1 / 2;
    grid-row: 1 / 4;
    flex-flow: column nowrap;
    @media screen and (min-width: 481px) {
      grid-column: 1 / 2;
      grid-row: 1 / 3;
    }
  }
  .logpanel__topview {
    @extend %--flexCenter;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    flex-direction: row;
    @media screen and (min-width: 481px) {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
    }
  }
  .logpanel__childlist {
    grid-column: 2/3;
    grid-row: 2/3;
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media screen and (min-width: 481px) {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      grid-column: 2/3;
      grid-row: 2/3;
      justify-content: flex-start;
    }
  }
  .logpanel__childItems {
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 481px) {
      margin: 2px;
      width: 55px;
    }
  }
  .logpanel__announce {
    grid-column: 2/3;
    grid-row: 3/4;
  }
}
</style>
