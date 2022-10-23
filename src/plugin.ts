import { Button, Modal } from "@/components";
import { Mahal, Plugin } from "mahal";

export class BulmaPlugin extends Plugin {
    setup(app: Mahal, options: any) {
        app.extend.component('BulmaModal', Modal);
        app.extend.component('BulmaButton', Button);
    }
}