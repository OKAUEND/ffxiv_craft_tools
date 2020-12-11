import { mount } from "@vue/test-utils";
import LogListContent from "@/components/Pages/LogListContent/LogListContent.vue";
import { MOBILE_WINDOW_WIDTH, PC_WINDOW_WIDTH } from "@/assets/windowSize";
import CategoryContent from "@/components/Parts/CategoryContent/CategoryContent.vue";

const LogListContentFactory = () => {
  return mount(LogListContent);
};

const resizeWindow = (x: number) => {
  window = Object.assign(window, { innerWidth: x });
  window.dispatchEvent(new Event("resize"));
};

describe("LogListContent", () => {
  test("画面のサイズによって、フラグが切り替わるか", (): void => {
    const wrapper = LogListContentFactory();

    //とりあえずPCサイズ
    resizeWindow(PC_WINDOW_WIDTH);

    //PCサイズの画面判定なので、mobileモードは偽値になっているはず
    expect(wrapper.vm.isMobileMode).toEqual(false);

    //mobileサイズでiPhoneSE2にする
    resizeWindow(MOBILE_WINDOW_WIDTH);

    //PCサイズの画面判定なので、mobileモードは真になっているはず
    expect(wrapper.vm.isMobileMode).toEqual(true);
  });

  test("項目を選択した場合、項目を保持できるか", (): void => {
    const wrapper = LogListContentFactory();

    //初期インスタンス生成時はどの値も保持していないこと
    expect(wrapper.vm.selectedcategory).toStrictEqual({});

    //テストデータを流し込んでみる
    wrapper.findComponent(CategoryContent).vm.$emit("update", { type: "test" });

    //テストデータは正しく状態を持てている？
    expect(wrapper.vm.selectedcategory["test"]).toEqual({ type: "test" });
  });

  test("保持する項目は動的であるか", (): void => {
    const wrapper = LogListContentFactory();

    //初期インスタンス生成時はどの値も保持していないこと
    expect(wrapper.vm.selectedcategory).toStrictEqual({});

    //テストデータを流し込んでみる
    wrapper.findComponent(CategoryContent).vm.$emit("update", { type: "test" });

    //テストデータは正しく状態を持てている？
    expect(wrapper.vm.selectedcategory["test"]).toEqual({ type: "test" });

    //テストデータを流し込んでみる
    wrapper.findComponent(CategoryContent).vm.$emit("update", { type: "hoge" });

    //テストデータは正しく状態を持てている？
    expect(wrapper.vm.selectedcategory["hoge"]).toEqual({ type: "hoge" });

    //テストデータを流し込んでみる
    wrapper.findComponent(CategoryContent).vm.$emit("update", { type: "fuga" });

    //テストデータは正しく状態を持てている？
    expect(wrapper.vm.selectedcategory["fuga"]).toEqual({ type: "fuga" });
  });

  test("値が変更されたときに、親へemitを発火しているか", (): void => {
    const wrapper = LogListContentFactory();

    //初期インスタンス生成時はどの値も保持していないこと
    expect(wrapper.vm.selectedcategory).toStrictEqual({});

    //テストデータを流し込んでみる
    wrapper.findComponent(CategoryContent).vm.$emit("update", { type: "test" });

    expect(wrapper.emitted().change).not.toBeUndefined();
  });
});
