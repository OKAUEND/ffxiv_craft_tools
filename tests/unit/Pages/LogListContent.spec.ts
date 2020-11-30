import { mount } from "@vue/test-utils";
import LogListContent from "@/components/Pages/LogListContent/LogListContent.vue"
import { MOBILE_WINDOW_WIDTH , PC_WINDOW_WIDTH } from "@/assets/windowSize"


const LogListContentFactory = () => {
    return mount(LogListContent);
  };

const resizeWindow=(x:number) =>{
    window = Object.assign(window, { innerWidth: x });
    window.dispatchEvent(new Event("resize"));
}


describe("LogListContent", () => {
    test("画面のサイズによって、フラグが切り替わるか", (): void => {

        const wrapper = LogListContentFactory();

        //とりあえずPCサイズ
        resizeWindow(PC_WINDOW_WIDTH);

        //PCサイズの画面判定なので、mobileモードは偽値になっているはず
        expect(wrapper.vm.isMobileMode).toEqual(false)

        //mobileサイズでiPhoneSE2にする
        resizeWindow(MOBILE_WINDOW_WIDTH);

        //PCサイズの画面判定なので、mobileモードは真になっているはず
        expect(wrapper.vm.isMobileMode).toEqual(true)
    });
});

