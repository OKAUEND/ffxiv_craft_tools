import { mount } from "@vue/test-utils";

import ContentList from "@/components/Parts/CategoryContent/ContentList.vue";
import ChildComponent from "@/components/Base/Input/BaseInputRadio.vue"
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
  value: "TEST",
};

describe("ContentList", () => {
  test("propsを受け取れいているか", (): void => {
    const wrapper = ContentListFactory(props);
    expect(wrapper.props().content).toStrictEqual(testData);
  });
    it("子からのemitイベントで親へemitを発火するか", () => {
      const wrapper = ContentListFactory(props);
      wrapper.findComponent(ChildComponent).vm.$emit("input");
      expect(wrapper.emitted().click[0]).toHaveLength(1)
    });
});
