/**
 * Helper function to reduce boilerplate,
 * especially those typescript type casting
 * @param {HTMLTemplateElement} templateElement
 */
export const cloneTemplate = (templateElement) => {
  const element =
    /** @type {DocumentFragment} */
    (templateElement.content.cloneNode(true));

  /** @param {string} qs */
  const querySelector = (qs) =>
    /** @type {HTMLElement} */ (element.querySelector(qs));

  return { element, querySelector };
};
