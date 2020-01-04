import { mount } from "@vue/test-utils";
import RecipeItem from "@/components/molecules/RecipeItem/index.vue";

const ObjectData = {
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
};

const RecipeItemMountFactory = propsData => {
  return mount(RecipeItem, {
    propsData: {
      Recipe: ObjectData,
      ...propsData
    }
  });
};

describe("ProductionContent.vue", () => {
  it("propsを正しく受け取れいているか", () => {
    const wrapper = RecipeItemMountFactory();
    expect(wrapper.props().Recipe).toEqual(ObjectData);
  });
  it("マイナスボタンをクリックしたら、Countの値が1減るか", () => {
    const wrapper = RecipeItemMountFactory();
    const initvalue = 5;
    wrapper.setData({ Count: initvalue });
    const DecrementButton = wrapper.find(".Atom-Button__Counter--Left");
    DecrementButton.trigger("click");
    expect(wrapper.vm.Count).not.toEqual(initvalue);
    expect(wrapper.vm.Count).toEqual(initvalue - 1);
  });
  it("マイナスボタンをクリックしても、Countが1以下にならないか", () => {
    const wrapper = RecipeItemMountFactory();
    const value = wrapper.vm.Count;
    const DecrementButton = wrapper.find(".Atom-Button__Counter--Left");
    DecrementButton.trigger("click");
    expect(wrapper.vm.Count).not.toEqual(0);
    expect(wrapper.vm.Count).toEqual(value);
  });
  it("プラスボタンをクリックしたら、Countの値が1個増えるか", () => {
    const wrapper = RecipeItemMountFactory();
    const value = wrapper.vm.Count;
    const IncrementButton = wrapper.find(".Atom-Button__Counter--Right");
    IncrementButton.trigger("click");
    expect(wrapper.vm.Count).not.toEqual(value);
    expect(wrapper.vm.Count).toEqual(value + 1);
  });
  it("プラスボタンをクリックしても、Countが999以上にならないか", () => {
    const wrapper = RecipeItemMountFactory();
    const initvalue = 999;
    wrapper.setData({ Count: initvalue });
    const IncrementButton = wrapper.find(".Atom-Button__Counter--Right");
    IncrementButton.trigger("click");
    expect(wrapper.vm.Count).not.toEqual(initvalue + 1);
    expect(wrapper.vm.Count).toEqual(initvalue);
  });
  it("アイテム名が表示されるか", () => {
    const wrapper = RecipeItemMountFactory();
    expect(wrapper.text()).toContain(ObjectData.name);
  });
  it("画像コンポーネントが表示されるか", () => {
    const wrapper = RecipeItemMountFactory();
    const img = wrapper.find(".Atom-Img__Icon--Medium");
    expect(img.attributes().src).toEqual(ObjectData.icon);
  });
  it("必要素材が配列分をループで要素を描画しているか", () => {
    const wrapper = RecipeItemMountFactory();
    const imgArray = wrapper.findAll(".Atom-Img__Icon--Small");
    expect(imgArray.length).toBe(ObjectData.childs.length);
    const spanArray = wrapper.findAll("span");
    expect(spanArray.length - 1).toBe(ObjectData.childs.length);
  });
  it("追加ボタンクリック時に情報をオブジェクトでemitするか", () => {
    const wrapper = RecipeItemMountFactory();
    const AddButton = wrapper.find(".Atom-Button__Add");
    AddButton.trigger("click");
    expect(wrapper.emitted().Add).toBeTruthy();
  });
});
