/**
 * Get closest parent of that element with that selector
 * @param {domElement | string} $el
 * @param {string} selector
 */
export const closest = ($el, selector) => {
  let ret = null;
  let $newEl = typeof $el === 'string' ? document.querySelector($el) : $el;
  while ($newEl) {
    if (($newEl.matches && $newEl.matches(selector))
      || ($newEl.msMatchesSelector && $newEl.msMatchesSelector(selector))) {
      ret = $newEl;
      break;
    }
    $newEl = $newEl.parentElement;
  }
  return ret;
};

/**
 * inject a async script in the dom
 *
 * @static
 * @param {string} url
 * @param {string} url
 * @memberof Tools
 */
export const injectScript = (src, id) => {
  if (id && document.getElementById(id)) return false;

  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.id = id;
  script.async = true;
  script.src = src;
  document.getElementsByTagName('head')[0].appendChild(script);
  return true;
};

export const readyStates = {
  loading: 'loading',
  interactive: 'interactive',
  complete: 'complete',
};

/**
 * Exec a method at a specific minimum readyState
 *
 * @static
 * @param {*} method
 * @param {string} [readyState='loading']
 * @memberof Tools
 */
export const ready = (method, readyState = 'loading') => {
  const rs = {
    loading: 0,
    interactive: 1,
    complete: 2,
  };
  const expectedState = rs[readyState];
  const currState = rs[document.readyState];

  if (currState > expectedState || currState >= rs.complete) method();
  else {
    switch (readyState) {
      case readyStates.loading:
      case readyStates.interactive:
        document.addEventListener('DOMContentLoaded', method);
        break;
      case readyStates.complete:
        window.addEventListener('load', method);
        break;
      default:
        break;
    }
  }
};

export default ready;
