import Chooles from '@/Chooles';

export default class Component extends Chooles.AbstractComponent {
  constructor(globals) {
    super(globals, { selector: '.js-component' });
  }

  onInit() {
    this.$component.addEventListener('click', () => {
      alert('I\'m a component'); // eslint-disable-line no-alert
    });
  }
}
