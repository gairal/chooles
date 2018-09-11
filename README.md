# Chooles

Collection of everyday tools that are too small to belong to a dedicated lib

> Developped with [Babel](https://babeljs.io), [webpack](http://webpack.github.io), [Jest](https://facebook.github.io/jest/) and :heart:

## Usage
Here is the simplest way to init and use the tools.
You can find more examples in the `examples/` directory of this repo.

``` js
import Chooles from 'chooles';
Chooles.ready(() => { console.log('ready'); });
```

---

# Table of Contents
* [Installation](#installation)
* [Methods](#methods)
* [Contribute](#contribute)
    * [File structure](#file-structure)
    * [Getting Started](#getting-started)
        * [Dependencies](#dependencies)
        * [Installing](#installing)
        * [Running the app](#running-the-app)
* [License](#license)

## Installation
```
npm install chooles
```
```
yarn add chooles
```

## Methods
### dom
#### Ready
This methods allows to execute a function after a specific ready state, or execute it right away if the state is already passed.
Params:
* function: the function to execute the page has loaded
* readyState(string)(default 'loading'): the ready state after which the method must be executed

```
const meth = () => alert('ready');

Chooles.ready(meth);
Chooles.dom.ready(meth);
Chooles.ready(meth, Chooles.dom.readyStates.complete);
```

#### injectScript
Injects a script at the end of the head of the page.
Chech first if a script with provided exist already.
Params:
* src(string): Script source url
* id(string): script id

```
Chooles.injectScript('https://cdnjs.cloudflare.com/ajax/libs/impress.js/0.5.3/impress.js', 'id');
Chooles.dom.injectScript('https://cdnjs.cloudflare.com/ajax/libs/impress.js/0.5.3/impress.js', 'id');
```

#### closest
Gets the closest parent of an element identified by a selector
Params:
* $el(string|domNode): either a domNode or a querySelector
* selector(string): querySelector of the element parent
```
Chooles.closest('.foo', '.bar');
Chooles.dom.closest(document.querySelector('.foo'), '.bar');
```

### forms
Methods to manipulate forms

#### serializeFormToJson
Gets a domNode, find all form controls in it then transform their values to a js object.
Params:
* $form(domNode): a domNode containing form controls
```
const json = Chooles.form.serializeFormToJson(document.querySelector('.foo'));
```
#### jsonToFormData
Gets a json representation of a form and serialize it to FormData.
Params:
* json(object): object from serializeFormToJson()
```
const formData = Chooles.form.jsonToFormData({
    foo: 'bar',
});
```
#### serializeForm
Receives a domNode and generate FormData from its form controls (serializeFormToJson + serializeForm).
Params:
* $form(domNode): a domNode containing form controls
```
const formData = Chooles.form.serializeForm(document.querySelector('.foo'));
```

### Abstract Component
Abstract class for JS components

```
import { AbstractComponent } from 'chooles';
export default class MyComponent extends AbstractComponent {
    constructor(globals) {
        super(globals, { selector: '.js-header' });
    }

    if (this.exists) {
        ...
    }
}
```

## Contribute
### File structure
```
chooles/
 ├──src/                             * our source files that will be compiled to javascript
 |   ├──app/                         * Lib sources
 │   │
 |   └──examples/                    * examples sources
 │       ├──index.pug                * our index.html
 │       │
 │       ├──html/                    * where you keep your pug templates
 │       │   └──layout.pug           * the main pug layout
 │       │
 │       └──app/                     * JavaScript/ES2015 files
 │
 ├──test/                            * Jest test definitions
 │
 ├──webpack/                         * Webpack configuration files
 │   ├──webpack.config.base.js       * Base config
 │   ├──webpack.config.js            * Development overrides
 │   └──webpack.config.prod.js       * Production overrides
 │
 └──package.json                     * package.json
```
### Getting Started
#### Dependencies
You need to install the following on you system
* `node` and `npm`
* Ensure you running Node version >= 8.0.0

#### Installing
* `fork` the github repo [https://github.com/gairal/chooles](https://github.com/gairal/chooles)
* `clone` your fork
* `npm install` to install all dependencies
* `make start` or `npm start` to start the dev server

#### Running the app
After all dependencies are installed, just run `make start` to start a local server using `webpack-dev-server` which will watch your files and build them.
webpack-dev-server will display the address and port of your server (by default, `http://0.0.0.0:3000`).

### Build commands
#### Server
```bash
# build files then launch the server and watch files
make start
```
#### Build files
```bash
# build files in ./build/ (Webpack, Sass, Pug) and validate them
make build
# "compile" files in ./dist/
# minify and concatenate assets
make release
```
#### Validate files
```bash
# runs the validations eslint and jest tests
make test
```

## License
[MIT](/LICENSE.md)

#### Author: [Frank Gairal]

[Frank Gairal]: http://github.com/gairal
