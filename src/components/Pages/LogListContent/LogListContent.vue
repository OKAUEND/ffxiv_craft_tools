<template>
  <div class="loglist-contnt">
    <div v-if="isVisible" class="loglist-contnt__category">
      <div v-if="isMobileMode" class="loglist-contnt__category-header">
        検索項目
        <button class="loglist-contnt__category-close">
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
        <div class="loglist-contnt__category-ui">
          <base-button-green @click="toggleModalVisible"
            >検索</base-button-green
          >
        </div>
      </div>
    </div>
    <div class="loglist-contnt__main">
      <div class="loglist-contnt__main__header" v-if="isMobileMode">
        <button @click="toggleModalVisible">TEST</button>
      </div>
      要素
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
} from "vue";

import CategoryContent from "@/components/Parts/CategoryContent/CategoryContent.vue";
import BaseIconCross from "@/components/Base/Icon/BaseIconCross.vue";
import BaseButtonGreen from "@/components/Base/Button/BaseButtonGreen.vue";

import FFXIV from "@/assets/FFXIV.json";

import { MOBILE_WINDOW_WIDTH } from "@/assets/windowSize.ts";

interface Content {
  name: string;
  jpname: string;
  type: string;
  order: number;
  imageurl: string;
  upperlevel?: number;
  lowerlevel?: number;
}

interface StringObjectKey {
  [key: string]: unknown;
}

export default defineComponent({
  name: "LogListContent",
  components: {
    CategoryContent,
    BaseIconCross,
    BaseButtonGreen,
  },
  emits: ["change"],
  setup(props, context: SetupContext) {
    const isMobileMode = ref(false);
    const isVisible = ref(true);

    const toggleModalVisible = () => {
      isVisible.value = !isVisible.value;
    };

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

    /**
     * 選択した項目を動的に保持する
     */
    const selectedcategory = reactive<StringObjectKey>({});

    /**
     * 保持している項目情報を更新する
     */
    const updateSelectedCategories = (emitvalue: Content) => {
      selectedcategory[emitvalue.type] = emitvalue;
      context.emit("change", selectedcategory);
    };

    return {
      selectedcategory,
      isMobileMode,
      isVisible,
      ffxivdetail,
      toggleModalVisible,
      updateSelectedCategories,
    };
  },
});
</script>

<style lang="scss" scoped>
.loglist-contnt {
  @media screen and(min-width: 481px) {
    display: grid;
    grid-template-columns: 0.3fr 0.7fr 2.5fr;
  }

  .loglist-contnt__category {
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
      grid-column: 2 / 3;
      grid-row: 1;
    }

    .loglist-contnt__category-header {
      padding: 14px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .loglist-contnt__category-close {
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

      .loglist-contnt__category-ui {
        padding: 20px;
        display: flex;
        justify-content: center;
      }
    }
  }

  .loglist-contnt__main {
    display: flex;
    flex-direction: column;
  }
}
</style>
