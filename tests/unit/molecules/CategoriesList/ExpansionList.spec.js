import { shallowMount, mount } from "@vue/test-utils";
import ExpansionList from "@/components/molecules/CategoriesList/ExpansionList.vue";
import RadioChild from "@/components/molecules/RadioButtomLabel/index.vue";
import { Heavensward } from "@/components/molecules/CategoriesList/ExpansionState.js";
import { ExpansionData } from "@/FFXIV.js";

const ExpansionFactory = propsData => {
  return shallowMount(ExpansionList, {
    propsData: {
      category: ExpansionData[1],
      value: "",
      ...propsData
    }
  });
};

const ExpansionMountFactory = propsData => {
  return mount(ExpansionList, {
    propsData: {
      category: ExpansionData[1],
      value: "",
      ...propsData
    }
  });
};

describe("ExpansionList", () => {
  it("Propsが受け取れているか", () => {
    const wrapper = ExpansionFactory();
    expect(wrapper.props().category).toBe(ExpansionData[1]);
    wrapper.setProps({
      value: "Expansion3"
    });
    expect(wrapper.props().value).toBe("Expansion3");
  });
  it("算出プロパティでタイプ毎にクラスのインスタンスが作成されているか", () => {
    const Expansion = {
      category: ExpansionData[1],
      value: ""
    };
    const Ex3 = Heavensward.create(ExpansionData[1]);
    expect(ExpansionList.computed.CategoryState.get.call(Expansion)).toEqual(
      Ex3
    );
  });
  it("子からのemit通知を受け取れているか", () => {
    const wrapper = ExpansionFactory();
    const Ex3 = Heavensward.create(ExpansionData[1]);
    const emitData = Ex3.fromSelectedData;
    wrapper.find(RadioChild).vm.$emit("change", emitData);
    expect(wrapper.emitted().change[0][0]).toEqual(emitData);
  });
  it("状態クラスで作成したクラスオブジェクトがv-bind:classに紐付けられてるか", () => {
    const wrapper = ExpansionMountFactory();
    expect(wrapper.classes().length).toBe(2);
  });
  it("propsのvalueに値があった場合、クラスが3つになっているか", () => {
    const wrapper = ExpansionMountFactory();
    wrapper.setProps({
      value: "Expansion3"
    });
    expect(wrapper.classes().length).toBe(3);
  });
});
