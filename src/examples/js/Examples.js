import Chooles from '@/Chooles';
import Butt from './Butt';
import Component from './Component';

export default class Examples {
  constructor() {
    this.$form = document.querySelector('.form-test');

    this.init();
  }

  init() {
    Butt.factory('ready', () => {
      Chooles.ready(() => alert('ready')); // eslint-disable-line no-alert
    });

    Butt.factory('closest', (e) => {
      const $foo = Chooles.closest(e.target, '.foo');

      if ($foo.classList.contains('border-blue')) {
        $foo.classList.add('border-pink');
        $foo.classList.remove('border-blue');
      } else {
        $foo.classList.remove('border-pink');
        $foo.classList.add('border-blue');
      }
    });

    Butt.factory('tojson', () => {
      const json = JSON.stringify(Chooles.form.serializeFormToJson(this.$form), null, 2);
      document.querySelector('.result--tojson').innerHTML = json;
    });

    Butt.factory('tofd', () => {
      const fd = Chooles.form.jsonToFormData({ input: 'fo0', select: 'bar1' });
      document.querySelector('.result--tofd').innerHTML = fd.toString();
    });

    Butt.factory('fromftofd', () => {
      const fd = Chooles.form.serializeForm(this.$form);
      document.querySelector('.result--fromftofd').innerHTML = fd.toString();
    });

    Component.factory({});
  }

  static factory() {
    return new Examples();
  }
}
