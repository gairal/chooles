export default class Utils {
  /**
   * Return elemtns using query selectors
   *
   * @static
   * @param {HTMLDomNode} el
   * @param {CSS Selectors} selectors
   * @returns
   * @memberof Utils
   */
  static query(el, selectors) {
    return el.querySelector(selectors);
  }

  /**
   *
   *
   * @static
   * @param {array<HTMLDomNode>} els
   * @param {CSS Selectors} selectors
   * @returns
   * @memberof Utils
   */
  static queryAll(els, selectors) {
    return els.map(el => Utils.query(el, selectors));
  }
}
