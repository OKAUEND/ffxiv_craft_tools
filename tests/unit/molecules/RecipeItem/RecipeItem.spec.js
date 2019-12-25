import { mount, shallowMount } from "@vue/test-utils";
import RecipeItem from "@/components/molecules/RecipeItem/index.vue";

const ObjectData = {
  Test: {
    ID: 1,
    name: "ミーンキャスターストライカーソード",
    icon: "static/CRAFTER/Alchemist.png",
    job: 1,
    type: 1,
    childs: [
      { ID: 1, icon: "static/CRAFTER/Alchemist.png", value: 5 },
      { ID: 2, icon: "static/CRAFTER/Alchemist.png", value: 3 },
      { ID: 3, icon: "static/CRAFTER/Alchemist.png", value: 4 },
      { ID: 4, icon: "static/CRAFTER/Alchemist.png", value: 6 },
      { ID: 5, icon: "static/CRAFTER/Alchemist.png", value: 1 },
      { ID: 6, icon: "static/CRAFTER/Alchemist.png", value: 1 }
    ]
  }
};

const RecipeItemMountFactory = propsData => {
  return mount(RecipeItem, {
    propsData: {
      Recipe: ObjectData
    }
  });
};

describe("ProductionContent.vue", () => {
  it("マイナスボタンをクリックしたら、Countの値が1減るか", () => {});
  it("プラスボタンをクリックしたら、Countの値が1個増えるか", () => {});
  it("アイテム名が表示されるか", () => {});
  it("画像コンポーネントが表示されるか", () => {});
  it("必要素材が配列分をループで要素を描画しているか", () => {});
  it("追加ボタンクリック時に情報をオブジェクトでemitするか", () => {});
});
