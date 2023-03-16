import { shallowMount, mount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";

describe("Counter.vue", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Counter);
    });

    it("should match snapshot", () => {
        const h2 = wrapper.find("h2");
        expect(h2.text()).toBe("Counter");
    });
    test("the default value of the counter is 100", () => {
        const counter = wrapper.find("[data-testid='counter']").text();
        expect(counter).toBe("101");
    });
    it("should increment or decrement the counter when the button is clicked", async () => {
        const [incbutton, decbutton] = wrapper.findAll("button");
        await incbutton.trigger("click");
        await decbutton.trigger("click");
        const counter = wrapper.find("[data-testid='counter']").text();
        expect(counter).toBe("101");
    });
    test("it should show the props value", () => {
        const title = "My Counter!!!!";
        const wrapper = shallowMount(Counter, {
            props: {
                title,
            },
        });
        const h2 = wrapper.find("h2");
        expect(h2.text()).toBe(title);
    });
});
