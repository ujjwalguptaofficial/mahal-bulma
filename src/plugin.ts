import { BulmaButton, BulmaModal } from "@/components";
import { Mahal, Plugin } from "mahal";

export class BulmaPlugin extends Plugin {
    setup(app: Mahal, options: any) {
        app.extend.component('BulmaModal', BulmaModal);
        app.extend.component('BulmaButton', BulmaButton);
    }
}