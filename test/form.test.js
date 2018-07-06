import * as form from '@/form';
import 'Mocks';

describe('form', () => {
  const $form = document.querySelector('.js-form');
  const formJson = {
    firstname: 'foo',
    lastname: 'bar',
  };

  it('Serialize form to json', () => {
    const json = form.serializeFormToJson($form);
    expect(json).toEqual(formJson);
  });

  it('Transform JSON to formData', () => {
    const formData = form.jsonToFormData(formJson);
    expect(formData).toBeInstanceOf(FormData);
    expect(formData.get('firstname')).toBe('foo');
  });

  it('Serialize form to formData', () => {
    const formData = form.serializeForm($form);
    expect(formData).toBeInstanceOf(FormData);
    expect(formData.get('firstname')).toBe('foo');
  });
});
