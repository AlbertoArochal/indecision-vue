import indecision from "@/components/indecision";
import { shallowMount } from "@vue/test-utils";

describe("indecision.vue", () => {
    let wrapper;
    let clgSpy;
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () =>
                Promise.resolve({
                    answer: "yes",
                    forced: false,
                    image: "https://yesno.wtf/assets/yes/2.gif",
                }),
        })
    );
    beforeEach(() => {
        wrapper = shallowMount(indecision);
        clgSpy = jest.spyOn(console, "log");
        jest.clearAllMocks();
    });
    it("should match snapshot", () => {
        expect(wrapper.html()).toMatchSnapshot();
    });
    it("'indecision' should be displayed", () => {
        const h1 = wrapper.find("h1");
        expect(h1.text()).toBe("Indecision");
    });
    it("when '?' is not written, don't render input", async () => {
        const getAnswerSpy = jest.spyOn(wrapper.vm, "getAnswer");
        const input = wrapper.find("input");
        await input.setValue("Hola Mundo");
        expect(getAnswerSpy).not.toHaveBeenCalled();
    });
    it("when '?' is written, render input", async () => {
        const getAnswerSpy = jest.spyOn(wrapper.vm, "getAnswer");
        const input = wrapper.find("input");
        await input.setValue("Hola Mundo?");
        expect(getAnswerSpy).toHaveBeenCalled();
    });
    it("the answer will be 'Si'", async () => {
        await wrapper.vm.getAnswer();
        const img = wrapper.find("img");
        const answer = wrapper.vm.answer;
        expect(img.exists()).toBeTruthy();
        expect(answer).toBe("Si");
    });
    it("if the fetch files it will throw an error", async () => {
        fetch.mockImplementationOnce(() => Promise.reject("Api is down"));
        await wrapper.vm.getAnswer();
        expect(wrapper.vm.answer).toBe("The img can't be loaded");
    });
});
