<template>
  <article class="Tools">
    <!-- <atom-semicircular-button @click="switchClickble()">
      //ハンガーバーメニュー
    </atom-semicircular-button> -->
    <article class="Tools__SubHeader"></article>
    <article class="Tools__Main">
      <craft-recipe
        @change="fetchfirestore"
        :craftlogs="firestoredatas.logs"
        @addtocart="addCraftLogToCart"
      />
    </article>
    <article class="Tools__SideDetailBar">
      <nav class="Tools__SidebarNav">
        <!-- <atom-button-small @click="switchClickble()">
          <atom-delete-icon />
        </atom-button-small> -->

        <router-link to="/result"> </router-link>
      </nav>
      <div class="Tools__SidebarBody">
        <template v-for="(item, order) in CartItems" :key="order">
          <cart-item-panel :item="item" />
        </template>
      </div>
      <div class="Tools__ToResultPage">
        <button :disabled="!isSelectLogInStore" @click="moveResultPage">
          必要個数集計
        </button>
      </div>
    </article>
  </article>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from "vue";
import firabase from "@/firebase.ts";
import { useStore } from "@/store";
import { useRoute, useRouter } from "vue-router";

import { CraftLog, CraftLogs, StoreLog } from "@/@types/FFXIVLogTypes";
import { StringObjectKey } from "@/@types/UserInterfaceTypes";
import { CartActionTypes } from "@/store/module/cart/actions-type";

import CraftRecipe from "@/components/Pages/LogListContent/LogListContent.vue";
import CartItemPanel from "@/components/Parts/CartItemPanel/index.vue";

export default defineComponent({
  name: "ToolsIndex",
  components: {
    CraftRecipe,
    CartItemPanel,
  },
  setup() {
    const isClicked = ref(false);
    const state = useStore();
    const router = useRouter();
    const route = useRoute();

    const firestoredatas = reactive<CraftLogs>({ logs: [] });

    const toggleclicked = () => {
      isClicked.value = !isClicked.value;
    };

    const CartItems = computed(() => {
      return state.getters.getCarts;
    });

    const isSelectLogInStore = computed(() => {
      return state.getters.getCartsLength > 0;
    });

    const fetchfirestore = async (emitvalue: StringObjectKey) => {
      const documentRef: firabase.firestore.Query<firabase.firestore.DocumentData> = firabase
        .firestore()
        .collection("CraftLog")
        .where("type.job", "==", emitvalue.crafter.name)
        .where("level.level", "<=", emitvalue.level.upperlevel)
        .where("level.level", ">=", emitvalue.level.lowerlevel);

      const fetchdata = await documentRef.get().then((queryShapshot) => {
        return queryShapshot.docs.map((doc) => doc.data() as CraftLog);
      });

      firestoredatas.logs = fetchdata;
    };

    const addCraftLogToCart = (craftlog: StoreLog) => {
      state.dispatch(CartActionTypes.add, craftlog);
    };

    const moveResultPage = () => {
      router.push("/result");
    };

    return {
      firestoredatas,
      isClicked,
      isSelectLogInStore,
      toggleclicked,
      fetchfirestore,
      addCraftLogToCart,
      CartItems,
      moveResultPage,
    };
  },
});
</script>

<style lang="scss" scoped>
.Tools {
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and(min-width: 481px) {
    display: grid;
    grid-template-rows: 50px 1fr;
    grid-template-columns: 2fr 1fr;
  }

  .Tools__SubHeader {
    height: 60px;
    width: 100%;
    @media screen and(min-width: 481px) {
      grid-column: 1 / 2;
      grid-row: 1;
      height: 50px;
      width: 100%;
    }
  }

  .Tools__Main {
    height: 100%;
    width: 100%;
    @media screen and(min-width: 481px) {
      width: 80vw;
      grid-column: 1 / 2;
    }
  }

  #tools__teleport-modal {
  }

  &__SideDetailBar {
    position: fixed;
    visibility: hidden;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 80%;
    top: 0px;
    right: -300px;
    background-color: $palette_bright-gray;
    box-shadow: -4px -4px 4px $palette_Dark-gray;
    transition: 0.3s ease;
    z-index: 2;
    @media screen and(min-width: 481px) {
      position: sticky;
      visibility: visible;
      grid-column: 2/3;
      grid-row: 1/3;
      right: auto;
      width: 100%;
      top: 60px;
      height: calc(100vh - 80px);
      box-shadow: 0px 0px 0px;
      scrollbar-width: none;
    }

    &.--Opend {
      visibility: visible;
      transition: 0.3s ease;
      right: 0;
    }
  }

  &__SidebarNav {
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding-left: 15px;
    padding-right: 30px;
    @media screen and (min-width: 481px) {
      display: none;
    }
  }

  &__SidebarBody {
    border-top: solid 2px #272727a1;
    height: 100%;
    width: 100%;
    flex: 1;
    @media screen and (min-width: 481px) {
      border-top: none;
    }
  }

  &__ToResultPage {
    height: 40px;
    width: 100%;
    margin-top: auto;
    display: flex;
    justify-content: center;
  }

  & > .Atom__ButtonOverlay {
    @media screen and (min-width: 481px) {
      display: none;
    }
  }

  & > .Atom__Button--semicircular {
    @media screen and (min-width: 481px) {
      display: none;
    }
  }

  &__hamburgerParts {
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
}
</style>
