/**
  * Serialize the fields of a form to JSON
  *
  * @static
  * @param {any} $form
  * @memberof Tools
  */
export const serializeFormToJson = ($form) => {
  const obj = {};
  const $controls = $form.querySelectorAll('input, select, textarea');
  for (let i = 0, l = $controls.length; i < l; i += 1) {
    const { name, value } = $controls[i];
    if (name) {
      obj[name] = value;
    }
  }

  return obj;
};

/**
* Serialize the fields of a form to FormData
*
* @static
* @param {any} $form
* @memberof Tools
*/
export const jsonToFormData = (json) => {
  const formData = new FormData();
  Object.keys(json).forEach((key) => {
    formData.append(key, json[key]);
  });
  return formData;
};

/**
* Serialize the fields of a form to FormData
*
* @static
* @param {any} $form
* @memberof Tools
*/
export const serializeForm = ($form) => {
  const json = serializeFormToJson($form);
  return jsonToFormData(json);
};
