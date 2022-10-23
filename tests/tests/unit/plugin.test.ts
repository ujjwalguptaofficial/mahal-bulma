import { getMount, mount } from "@mahaljs/test-utils";
import { children, Component, Mahal } from "mahal";
import { BulmaPlugin } from "mahal-bulma";
import App from "@/app.mahal";
import { createRenderer } from "@mahaljs/html-compiler";

const app = new Mahal(App, undefined);
app.extend.plugin(BulmaPlugin);
app.extend.setRenderer(createRenderer);


function useComponent(componentTag: string) {
    class TempComponent extends Component {
        template: string = `<${componentTag}/>`
    }

    return TempComponent;
}

const mountWithApp = getMount(app);

async function testForTag(componentTag: string, expectedTag: string) {
    const component = await mountWithApp(useComponent(componentTag));
    expect(component.element.tagName).equal(expectedTag.toUpperCase());
}


describe("Plugin", async () => {

    describe('components', async () => {

        it("button", async () => {
            await testForTag('BulmaButton', 'button');
        });

        it("modal", async () => {
            await testForTag('BulmaModal', 'div');
        });

        it("invalid component", async () => {
            try {
                await testForTag('InvalidComponent', 'button');
                throw 'should throw error'
            } catch (error) {
                expect(error).equal('{Mahal throw}: Component "InvalidComponent" is not registered. Make sure you have registered component either in parent component or globally.\n\ntype : invalid_component')
            }
        });

    });

});