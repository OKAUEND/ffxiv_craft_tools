import { shallowMount, mount } from "@vue/test-utils";
import ExpansionList from "@/components/molecules/ExpansionList/index.vue";
import RadioChild from "@/components/molecules/RadioButtomLabel/index.vue";
import { Heavensward } from "@/components/molecules/ExpansionList/ExpansionState.js";
import { ExpansionData } from "@/FFXIV.js";

const ExpansionFactory = propsData => {
  return shallowMount(ExpansionList, {
    propsData: {
      Expansion: ExpansionData[1],
      SelectValue: "",
      ...propsData
    }
  });
};

const ExpansionMountFactory = propsData => {
  return mount(ExpansionList, {
    propsData: {
      Expansion: ExpansionData[1],
      SelectValue: "",
      ...propsData
    }
  });
};

describe("ExpansionList", () => {
  it("Propsが受け取れているか", () => {
    const wrapper = ExpansionFactory();
    expect(wrapper.props().Expansion).toBe(ExpansionData[1]);
    wrapper.setProps({
      SelectValue: "Expansion3"
    });
    expect(wrapper.props().SelectValue).toBe("Expansion3");
  });
  it("算出プロパティでタイプ毎にクラスのインスタンスが作成されているか", () => {
    const Expansion = {
      Expansion: ExpansionData[1],
      SelectValue: ""
    };
    const Ex3 = Heavensward.create(ExpansionData[1]);
    expect(ExpansionList.computed.ExpansionState.get.call(Expansion)).toEqual(
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
      SelectValue: "Expansion3"
    });
    expect(wrapper.classes().length).toBe(3);
  });
});
