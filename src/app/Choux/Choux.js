import Utils from './Utils';

export default class Choux {
  constructor(selectors) {
    this.selectors = selectors;
    this.elements = [];
    this.init();
  }

  get exists() {
    return this.elements.lenght > 0;
  }

  hide() {
    this.elements.forEach((el) => {
      // eslint-disable-next-line no-param-reassign
      el.style.display = 'none';
    });
  }

  show() {
    this.elements.forEach((el) => {
      // eslint-disable-next-line no-param-reassign
      el.style.display = 'block';
    });
  }

  /**
   * Init the choux object
   *
   * @returns Choux
   * @memberof Choux
   */
  init() {
    if (!this.selectors) return this;

    // get the elements
    this.elements = Utils.queryAll([document], this.selectors);
    return this;
  }

  /**
   * Finds element which has this as parent using querySelector
   *
   * @param {CSS selectors} selectors
   * @returns Choux
   * @memberof Choux
   */
  find(selectors) {
    const cx = new Choux();

    // return empty Choux when no selectors or current Choux is empty
    if (!selectors || !this.exists) return cx;
    cx.elements = Utils.queryAll(this.elements, this.selectors);

    return cx;
  }
}
