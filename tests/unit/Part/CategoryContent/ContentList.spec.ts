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
      selectRadioValue: "",
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
    wrapper.findComponent(ChildComponent).vm.$emit("change-radio");
    expect(wrapper.emitted().change).not.toBeUndefined()
  });
});



import CategoryContent from "@/components/Parts/CategoryContent/CategoryContent.vue"

const categoryContentFactory = (propsData: object) => {
  return mount(CategoryContent, {
    propsData: {
      categories:[],
      ...propsData,
    },
  });
};

interface CategoryContentProps {
  categories:crafter[]
}

const categoryContentProps:CategoryContentProps = {
  categories:crafterJSON.crafter
}

describe("CategoryContent", () => {
  test("Componentを配列分描画できているか", (): void => {
    const wrapper = categoryContentFactory(categoryContentProps);
    const findconpoments =  wrapper.findAllComponents(ContentList);
    expect(findconpoments.length).toBe(crafterJSON.crafter.length)
    });

  test("小からのEmitで、stateが更新されているか", (): void => {
    const wrapper = categoryContentFactory(categoryContentProps);
    expect(wrapper.vm.selectRadioValue).toBe("Expansion2")
    wrapper.findComponent(ContentList).vm.$emit("change",{name:"TEST"});
    console.log(wrapper.vm.selectRadioValue)
    expect(wrapper.vm.selectRadioValue).not.toBe("Expansion2")
  });
});
