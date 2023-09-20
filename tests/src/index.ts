import { Mahal } from "mahal";
import App from "@/app.mahal";
import config from "~/config/env";
import { BulmaPlugin } from "mahal-bulma";
import "bulma";


const app = new Mahal(App, '#app');
app.extend.plugin(BulmaPlugin);

// set config to be available globally
app.global.env = config;

app.create();