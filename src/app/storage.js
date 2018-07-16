export default class Storage {
  constructor(opts) {
    this.hasLocalStorage = Storage.hasLocalStorage();
    const defaultOpts = {
      key: 'CHOOLES',
    };

    this.opts = { ...defaultOpts, ...opts };
  }

  /**
   * Return the LocalStorage key
   *
   * @readonly
   * @memberof Storage
   */
  get key() {
    return this.opts.key;
  }

  get value() {
    const val = this.hasLocalStorage ? localStorage.getItem(this.key) : null;
    if (!val) return val;
    return JSON.parse(val);
  }

  set value(val) {
    if (this.hasLocalStorage) localStorage.setItem(this.key, JSON.stringify(val));
  }

  /**
   * Remove the key from the localStorage
   *
   * @memberof Storage
   */
  empty() {
    if (this.hasLocalStorage) localStorage.removeItem(this.key);
  }

  /**
   * Method checking if current browser has local storage
   *
   * @static
   * @returns
   * @memberof Storage
   */
  static hasLocalStorage() {
    const test = 'test';
    try {
      localStorage.setItem(test, test);
      localStorage.getItem(test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }
}
