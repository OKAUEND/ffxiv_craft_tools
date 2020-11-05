import { mount } from "@vue/test-utils";
// import CategoryGroup from "@/components/organisms/CategoryGroup/CategoryGroup.vue";
// import CategoriesList from "@/components/molecules/CategoriesList/CategoriesList.vue";

import ContentList from "@/components/Parts/CategoryContent/ContentList.vue";
import crafterJSON from "@/assets/FFXIV.json";

const testData: crafter = crafterJSON.crafter[0];

interface crafter {
  type: string;
  name: string;
  order: number;
  image: string;
}

interface Props {
  content: crafter;
  value: string;
}

const ContentListFactory = (propsData: object) => {
  return mount(ContentList, {
    propsData: {
      content: {},
      value: "",
      ...propsData,
    },
  });
};

const props: Props = {
  content: testData,
  value: "",
};

describe("ContentList", () => {
  test("propsを受け取れいているか", (): void => {
    const wrapper = ContentListFactory(props);
    expect(wrapper.props().content).toStrictEqual(testData);
  });
  //   it("子からのemitイベントの発火を感知できるか", () => {
  //     const emitdata = { name: "TEST1" };
  //     const wrapper = IconFactory();
  //     wrapper.find(CategoriesList).vm.$emit("change", emitdata);
  //     expect(wrapper.emitted().change[0][0]).toEqual(emitdata);
  //   });
  //   it("受け取ったemitで、Dataのインスタンス変数が変わるか", () => {
  //     const emitdata = { name: "TEST1" };
  //     const wrapper = IconFactory();
  //     wrapper.find(CategoriesList).vm.$emit("change", emitdata);
  //     expect(wrapper.vm.SelectRadioValue).toEqual(emitdata.name);
  //   });
  //   it("親へemitを発火するか", () => {
  //     const wrapper = IconFactory();
  //     const emitdata = { name: "TEST1" };
  //     wrapper.vm.onExpasionButtomClick(emitdata);
  //     expect(wrapper.emitted().change[0][0]).toBe(emitdata);
  //   });
  //   it("HeadTextをクリックしたら真偽値の値が切り替わるか", () => {
  //     const wrapper = IconFactory();
  //     expect(wrapper.vm.isLabelClick).toBe(false);
  //     const HeadText = wrapper.find(".Category__HeadText");
  //     HeadText.trigger("click");
  //     expect(wrapper.vm.isLabelClick).toBe(true);
  //     console.log(wrapper.vm.isLabelClick);
  //   });
  //   //   it("LevelとMasterBookの場合、インスタンス変数を使わずにStoreパターンを使うか", () => {});
});
