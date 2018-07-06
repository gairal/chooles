import Chooles from '@/Chooles';

describe('Chooles', () => {
  it('Has dom methods', () => {
    expect(Chooles.ready).toBeDefined();
    expect(Chooles.dom.ready).toBeDefined();
    expect(Chooles.closest).toBeDefined();
    expect(Chooles.dom.closest).toBeDefined();
    expect(Chooles.injectScript).toBeDefined();
    expect(Chooles.dom.injectScript).toBeDefined();
  });

  it('Has form methods', () => {
    expect(Chooles.form.serializeFormToJson).toBeDefined();
    expect(Chooles.form.jsonToFormData).toBeDefined();
    expect(Chooles.form.jsonToFormData).toBeDefined();
  });
});
