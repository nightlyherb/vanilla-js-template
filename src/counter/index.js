import { cloneTemplate } from "../@lib/template";
import { createState } from "../@lib/state";

class CounterModel {
  /**
   * @constructor
   * @param {(
   *  {
   *    count: {value: number}
   *  }
   * )} props
   */
  constructor(props) {
    this.state = props.count;
  }

  increment() {
    this.state.value += 1;
  }

  decrement() {
    this.state.value -= 1;
  }
}

/**
 * @type {() => DocumentFragment}
 */
export function counter() {
  const { element, querySelector } = cloneTemplate(
    /** @type {HTMLTemplateElement} */ (document.getElementById("/counter"))
  );
  const $increment = querySelector(".\\/counter__main .increment");
  const $decrement = querySelector(".\\/counter__main .decrement");
  const $count = querySelector(".\\/counter__main .count");

  const state = createState({ value: 0 }, [
    (state) => $count.replaceChildren(String(state.value)),
  ]);
  // This triggers the handlers on initialization.
  state.value = state.value;

  const model = new CounterModel({
    count: state,
  });

  $increment.addEventListener("click", () => model.increment());
  $decrement.addEventListener("click", () => model.decrement());

  return element;
}
