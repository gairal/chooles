import * as dom from './dom';
import * as form from './form';
import Storage from './storage';
import AbstractComponent from './abstractComponent';

export default {
  ...dom, // export dom methods as default
  dom,
  form,
  Storage,
  AbstractComponent,
};
