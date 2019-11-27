import { shallowMount } from "@vue/test-utils";
import ExpansionGroup from "@/components/molecules/ExpansionGroup/index.vue";
import ExpansionItem from "@/components/molecules/ExpansionList/index.vue";
import { ExpansionData } from "@/FFXIV.js";

const ExpansionGroupFactory = propsData => {
  return shallowMount(ExpansionGroup, {
    propsData: {
      Expansions: ExpansionData,
      ...propsData
    }
  });
};

describe("ExpansionGroup", () => {
  it("propsを受け取れいているか", () => {
    const wrapper = ExpansionGroupFactory();
    expect(wrapper.props().Expansions.length).toBe(ExpansionData.length);
  });
  it("初期データはpropsを受け取って変更されていないか", () => {
    const wrapper = ExpansionGroupFactory();
    expect(wrapper.vm.SelectRadioValue).toEqual("Expansion2");
  });
  it("子からのemitイベントの発火を感知できるか", () => {
    const emitdata = { ExpansionCode: "TEST1" };
    const wrapper = ExpansionGroupFactory();
    wrapper.find(ExpansionItem).vm.$emit("change", emitdata);
    expect(wrapper.emitted().change[0][0]).toEqual(emitdata);
  });
  it("受け取ったemitで、Dataのインスタンス変数が変わるか", () => {
    const emitdata = { ExpansionCode: "TEST1" };
    const wrapper = ExpansionGroupFactory();
    wrapper.find(ExpansionItem).vm.$emit("change", emitdata);
    expect(wrapper.vm.SelectRadioValue).toEqual(emitdata.ExpansionCode);
  });
  it("親へemitを発火するか", () => {
    const wrapper = ExpansionGroupFactory();
    const emitdata = { ExpansionCode: "TEST1" };
    wrapper.vm.onExpasionButtomClick(emitdata);
    expect(wrapper.emitted().change[0][0]).toBe(emitdata);
  });
});
