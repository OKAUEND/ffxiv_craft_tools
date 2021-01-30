<template>
  <div class="loglistcontnt">
    <div v-if="isVisible" class="loglistcontnt__category">
      <div v-if="isMobileMode" class="loglistcontnt__category-header">
        検索項目
        <button class="loglistcontnt__category-close">
          <base-icon-cross @click="toggleModalVisible" />
        </button>
      </div>
      <div class="test">
        <div class="body">
          <category-content
            :categories="ffxivdetail.crafter"
            @update="updateSelectedCategories"
          ></category-content>
          <category-content
            :categories="ffxivdetail.level"
            @update="updateSelectedCategories"
          ></category-content>
          <!-- <category-content
            :categories="ffxivdetail.crafter"
          ></category-content> -->
        </div>
        <div class="loglistcontnt__category-ui">
          <base-button-green @click="fetchfirestore">検索</base-button-green>
        </div>
      </div>
    </div>
    <div class="loglistcontnt__main">
      <template v-for="(log, key) in craftlogs" :key="key">
        <log-panel
          :craftdata="log"
          :statecount="storeTempLogCount"
          @click="onSelectLog"
        />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  onUnmounted,
  ref,
  reactive,
  SetupContext,
  PropType,
} from "vue";

import CategoryContent from "@/components/Parts/CategoryContent/CategoryContent.vue";
import LogPanel from "@/components/Parts/LogPanel/LogPanel.vue";

import BaseIconCross from "@/components/Base/Icon/BaseIconCross.vue";
import BaseButtonGreen from "@/components/Base/Button/BaseButtonGreen.vue";

import FFXIV from "@/assets/FFXIV.json";

import { MOBILE_WINDOW_WIDTH } from "@/assets/windowSize.ts";

import { CraftLogs, StoreLog } from "@/@types/FFXIVLogTypes";
import { Content, StringObjectKey } from "@/@types/UserInterfaceTypes";

import { getChildLogDetail } from "@/module/craftlog-aggregate";

import { useStore } from "vuex";

interface Props {
  craftlogs: CraftLogs;
}

interface TempSelectLog {
  temp: StoreLog;
}

export default defineComponent({
  name: "LogListContent",
  components: {
    CategoryContent,
    LogPanel,
    BaseIconCross,
    BaseButtonGreen,
  },
  props: {
    craftlogs: {
      type: Object as PropType<CraftLogs>,
      default: [],
    },
  },
  emits: ["change", "addtocart"],
  setup(props: Props, context: SetupContext) {
    const isMobileMode = ref(true);
    const isVisible = ref(true);

    /**
     * 選択した項目を動的に保持する
     */
    const selectedcategory = reactive<StringObjectKey>({});

    const state = useStore();

    const toggleModalVisible = () => {
      isVisible.value = !isVisible.value;
    };

    /**
     * 選択した項目を動的に保持する
     */
    const storeTempLogCount = computed(() => {
      return state.getters.getCartsLength;
    });

    /**
     * 画面サイズ変更時に変更イベントを検知しモバイルかどうか判断する
     */
    const changeWindowSize = () => {
      MOBILE_WINDOW_WIDTH >= window.innerWidth
        ? ((isMobileMode.value = true), (isVisible.value = false))
        : ((isMobileMode.value = false), (isVisible.value = true));
    };

    //画面サイズが変更された時に発火するイベントを登録する
    //Vue3からcreatedは明示的に書かずにsetupに直接コードするためここにかく
    window.addEventListener("resize", changeWindowSize);

    //インスタンスが破棄された時に画面サイズ変更でのイベントを破棄する
    //破棄イベントは明示的に書かなくてはいけないので、Vue3でのdestroyedの役目であるonUnmountedを利用する
    onUnmounted(() => {
      window.removeEventListener("resize", changeWindowSize);
    });

    const ffxivdetail = computed(() => {
      return FFXIV;
    });

    const propcraftlogs = computed(() => {
      return props.craftlogs.logs;
    });
    /**
     * 保持している項目情報を更新する
     */
    const updateSelectedCategories = (emitvalue: Content) => {
      selectedcategory[emitvalue.type] = emitvalue;
    };

    const fetchfirestore = () => {
      context.emit("change", selectedcategory);
    };

    const onSelectLog = (log: StoreLog) => {
      context.emit("addtocart", log);
    };

    return {
      propcraftlogs,
      selectedcategory,
      isMobileMode,
      isVisible,
      ffxivdetail,
      toggleModalVisible,
      updateSelectedCategories,
      fetchfirestore,
      onSelectLog,
      storeTempLogCount,
    };
  },
});
</script>

<style lang="scss" scoped>
.loglistcontnt {
  overflow: hidden;
  width: 100%;
  @media screen and(min-width: 481px) {
    display: grid;
    grid-template-columns: 0.3fr 0.7fr 2.5fr;
    height: 100%;
  }

  .loglistcontnt__category {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    height: $mobile_modal_window_size;
    background: $palette_bright-gray;
    z-index: 2;
    @media screen and(min-width: 481px) {
      position: relative;
      grid-column: 2 / 3;
      grid-row: 1;
    }

    .loglistcontnt__category-header {
      padding: 14px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .loglistcontnt__category-close {
        background-color: transparent;
      }
    }

    .test {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      overflow: auto;

      .body {
        overflow: auto;
      }

      .loglistcontnt__category-ui {
        padding: 20px;
        display: flex;
        justify-content: center;
      }
    }
  }

  .loglistcontnt__main {
    display: flex;
    flex-direction: column;
    grid-column: 3 / 4;
    grid-row: 1;
    padding: 0px 10px 0px 10px;
  }

  .loglistcontent__modal {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    box-sizing: border-box;
    @media screen and(min-width: 481px) {
    }

    .loglistcontent__modal-overlay {
      width: 100%;
      height: 100%;
      background-color: $palette_Overlay_gray;
    }

    .loglistcontent__modal-body {
      position: absolute;
      top: 20%;
      background-color: $palette_bright-gray;
      width: 100%;
      height: 250px;
    }
  }
}
</style>
