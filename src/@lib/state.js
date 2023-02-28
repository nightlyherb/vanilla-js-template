/**
 * @template {object} T
 * @param {T} initialValue
 * @param {Array<(value: T) => void>} handlersOnUpdate
 * @return {T}
 */
export const createState = (initialValue, handlersOnUpdate) => {
  const result = new Proxy(initialValue, {
    set(o, k, v) {
      const success = Reflect.set(o, k, v);
      if (success) {
        for (const handler of handlersOnUpdate) {
          handler(o);
        }
      }
      return success;
    },
  });

  return result;
};
