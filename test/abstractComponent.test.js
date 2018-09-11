import Chooles from '@/Chooles';
import { GLOBALS } from 'Mocks';

describe('AbstractComponent', () => {
  let component;
  beforeAll(() => {
    component = new Chooles.AbstractComponent(GLOBALS, { selector: '.js-not-exist' });
  });

  it('Has default properties', () => {
    expect(component).toBeInstanceOf(Chooles.AbstractComponent);
    expect(component.exists).toBeFalsy();
    expect(component.selector).toBeDefined();
    expect(component.globals).toBeDefined();
    expect(component.breakpoints).toBeDefined();
    expect(component.init()).toBeInstanceOf(Promise);
  });

  it('Can be init', () => {
    component = new Chooles.AbstractComponent(GLOBALS, { selector: '.js-main' });
    component.onInit = jest.fn();
    component.onWindowResize = jest.fn();
    component.init();
    expect(component.selector).toBeDefined();
    expect(component.onInit).toHaveBeenCalled();
  });

  it('Can have multiple sections', () => {
    component = new Chooles.AbstractComponent(GLOBALS, { selector: '.item', multiple: true });
    component.onInit = jest.fn();
    component.init();
    expect(component.selector).toBeDefined();
    expect(component.onInit).toHaveBeenCalled();
    expect(component.$component.length).toEqual(2);
  });
});
