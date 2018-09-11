import { ready } from './dom';
/**
 * Defines the methods and properties of a base component
 *
 * @export
 * @class AbstractComponent
 */
export default class AbstractComponent {
  constructor(globals, opts = {}) {
    this.globals = globals;
    this.opts = opts;
    this.$component = null;

    if (opts.selector && typeof opts.selector === 'string') {
      if (!opts.multiple) this.$component = document.querySelector(opts.selector);
      else this.$component = document.querySelectorAll(opts.selector);
    } else if (opts.element && opts.element instanceof Element) this.$component = opts.element;
  }

  /**
   * length of the elements in case of querySelectorAll
   *
   * @readonly
   * @memberof AbstractComponent
   */
  get length() {
    return this.$component.length !== undefined ? this.$component.length : null;
  }

  /**
   * Check if the component exist in the dom
   *
   * @readonly
   * @memberof AbstractComponent
   */
  get exists() {
    return (
      (this.opts.selector !== undefined || this.opts.element !== undefined)
      && ((this.$component instanceof Node
        && this.$component !== undefined
        && this.$component !== null)
        || (this.$component instanceof NodeList && this.$component.length > 0))
    );
  }

  /**
   * Returns the global breakpoints object
   *
   * @readonly
   * @memberof AbstractComponent
   */
  get breakpoints() {
    return this.globals.breakpoints;
  }

  get selector() {
    return this.opts.selector;
  }

  get logger() {
    return this.globals.logger;
  }

  /**
   * Init a component asynchrounousely
   *
   * @returns This
   * @memberof AbstractComponent
   */
  init() {
    return new Promise((resolve, reject) => {
      if (!this.exists) reject(new Error('Component doesn’t exist'));
      if (this.onInit) {
        try {
          this.onInit();
        } catch (e) {
          reject(new Error(`${this.opts.selector}: Init Error - ${e}`));
        }
      }
      if (this.onWindowResize) {
        ready(() => {
          window.addEventListener('resize', (e) => {
            this.onWindowResize(e, window.innerWidth, window.innerHeight);
          });
        }, 'complete');
      }
      if (this.onScroll) {
        ready(() => {
          window.addEventListener('scroll', (e) => {
            this.onScroll(e, window.scrollY);
          });
        }, 'complete');
      }
      resolve(this);
    });
  }

  /**
   * static factory to ease the init in the main.js
   *
   * @static
   * @param {any} globals
   * @param {Node} $container
   * @returns ComponentInstance
   * @memberof AbstractComponent
   */
  static factory(globals, $container) {
    const component = new this(globals, $container);
    component.init().catch(err => console.error(err));
    return component;
  }
}
