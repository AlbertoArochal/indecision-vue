import indecision from "@/components/indecision";
import { shallowMount } from "@vue/test-utils";

describe("indecision.vue", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(indecision);
    });
    it("should match snapshot", () => {
        const h2 = wrapper.find("h2");
        expect(h2.text()).toBe("Indecision");
    });
});
