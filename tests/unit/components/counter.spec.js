import { shallowMount, mount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";

describe("Counter.vue", () => {
    it("should match snapshot", () => {
        const wrapper = shallowMount(Counter);
        const h2 = wrapper.find("h2");
        expect(h2.text()).toBe("Counter");
    });
});
