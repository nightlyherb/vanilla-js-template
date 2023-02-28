import { counter } from "./counter";

const app = /** @type {HTMLElement} */ (document.getElementById("app"));
const counterFragment = counter();
app.replaceChildren(counterFragment);
