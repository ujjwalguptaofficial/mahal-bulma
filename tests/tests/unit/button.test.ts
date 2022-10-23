import { mount } from "@mahaljs/test-utils";
import { children, Component } from "mahal";
import { Button } from "mahal-bulma";


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
        const component = await mount(ButtonUseWithoutSlotContent);

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