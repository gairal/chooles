import * as dom from '@/dom';
import 'Mocks';

describe('dom', () => {
  it('gets the closest parent', () => {
    const $butt = document.querySelector('.js-butt');
    const $parent = document.querySelector('.js-parent');
    const $par = dom.closest($butt, '.js-parent');
    expect($par).toBeInstanceOf(Node);
    expect($par).toEqual($parent);
  });

  it('Injects script', () => {
    const inject1 = dom.injectScript('//domain.com', 'tool-script');
    expect(inject1).toBeTruthy();
    const $script = document.querySelector('#tool-script');
    expect($script).toBeInstanceOf(Node);

    const inject2 = dom.injectScript('//domain.com', 'tool-script');
    expect(inject2).toBeFalsy();
  });

  it('Execute method when ready', () => {
    const meth = jest.fn();
    dom.ready(meth);
    expect(meth).toHaveBeenCalled();
  });
});
