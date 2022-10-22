import { mount } from "@mahaljs/test-utils";
import Button from "@/components/button.mahal";
import { children, Component } from "mahal";

@children({
    Button
})
class ButtonUseWithoutSlotContent extends Component {
    template: string = `<Button></Button>`
}

@children({
    Button
})
class ButtonUseWithSlotContent extends Component {
    template: string = `<Button>Submit</Button>`
}

describe("Button", async () => {

    describe('ButtonUseWithoutSlotContent', async () => {
        const component: Button = await mount(ButtonUseWithoutSlotContent);

        it("check button content", async () => {
            const button = component.element;
            expect(button.innerHTML).equal(`<span>Ok</span>`);
        });
    });

    describe('ButtonUseWithSlotContent', async () => {
        const component = await mount(ButtonUseWithSlotContent);

        it("check button content", async () => {
            const button = component.element;
            expect(button.innerHTML).equal(`<span>Submit</span>`);
        });
    });

});