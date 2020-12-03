<template>
  <article class="Tools">
    <!-- <atom-semicircular-button @click="switchClickble()">
      <div class="Tools__hamburgerParts"></div>
      <div class="Tools__hamburgerParts"></div>
      <div class="Tools__hamburgerParts"></div>
    </atom-semicircular-button> -->
    <article class="Tools__SubHeader"></article>
    <article class="Tools__Main">
      <craft-recipe :categories="ffxivCraftDetail.crafter"></craft-recipe>
    </article>
    <!-- <atom-overlay
      :isOverlayShow="this.isClickbed"
      @click="switchClickble"
    ></atom-overlay> -->
    <article class="Tools__SideDetailBar" :class="isOpend">
      <nav class="Tools__SidebarNav">
        <!-- <atom-button-small @click="switchClickble()">
          <atom-delete-icon />
        </atom-button-small> -->
        <router-link to="/result">
          <!-- <cart-items></cart-items> -->
        </router-link>
      </nav>
      <div class="Tools__SidebarBody"></div>
      <div class="Tools__ToResultPage">
        <router-link to="/result">
          <!-- <atom-button-green>Result</atom-button-green> -->
        </router-link>
      </div>
    </article>
  </article>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import firabase from "@/firebase.ts";

import CraftRecipe from "@/components/Pages/LogListContent/LogListContent.vue";

interface Content {
  name: string;
  jpname: string;
  type: string;
  order: number;
  imageurl: string;
  upperlevel?: number;
  lowerlevel?: number;
}

interface FirestoreData {
  Childrenlogs: LogChildren[];
  gathering: {
    Xpoint: number;
    Zpoint: number;
    collectionarea: string;
  };
  imageurl: string;
  ishighlevel: boolean;
  level: {
    itemlevel: number;
    level: number;
  };
  patchversion: number;
  priority: number;
  rank: string;
  starmark: number;
  text: {
    engname: string;
    name: string;
  };
  type: {
    MeisterBookRank: number;
    category: string;
    craftcontent: string;
    job: string;
  };
  updateTime: firebase.default.firestore.Timestamp;
  website: {
    eriones: string;
    lodestone: string;
  };
}

interface LogChildren {
  isEnable: boolean;
  order: number;
  childrenDocumentRef?: firebase.default.firestore.DocumentReference;
  name: string;
  engname?: string;
  imageurl: string;
  value: number;
}

interface StringObjectKey {
  [key: string]: Content;
}

export default defineComponent({
  name: "ToolsIndex",
  components: {
    CraftRecipe,
  },
  setup() {
    const isClicked = ref(false);

    const toggleclicked = () => {
      isClicked.value = !isClicked.value;
    };

    const opendstyleclsss = computed(isClicked => {
      return {
        "--Opend": isClicked,
      };
    });

    const fetchfirestore = async (emitvalue: StringObjectKey) => {
      const documentRef: firabase.firestore.Query<firabase.firestore.DocumentData> = firabase
        .firestore()
        .collection("CraftLog")
        .where("type.job", "==", emitvalue.crafter.name)
        .where("level.level", "<=", emitvalue.level.upperlevel)
        .where("level.level", ">=", emitvalue.level.lowerlevel);

      const fetchdata = await documentRef.get().then(queryShapshot => {
        return queryShapshot.docs.map(doc => doc.data());
      });

      console.log(fetchdata);
    };

    return {
      isClicked,
      toggleclicked,
      opendstyleclsss,
      fetchfirestore,
    };
  },
});
</script>

<style lang="scss" scoped>
.Tools {
  height: 100%;
  display: flex;
  flex-direction: column;
  @media screen and(min-width: 481px) {
    display: grid;
    grid-template-rows: 50px 1fr;
    grid-template-columns: 2fr 1fr;
  }

  &__SubHeader {
    height: 60px;
    width: 100%;
    @media screen and(min-width: 481px) {
      grid-column: 1 / 2;
      grid-row: 1;
      height: 50px;
      width: 100%;
    }
  }

  &__Main {
    width: 100vw;
    grid-column: 1 /2;
    grid-row: 2 / 3;
    @media screen and(min-width: 481px) {
      width: 80vw;
      grid-column: 1 / 2;
    }
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
