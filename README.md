# Choux

---

### TODO
- [ ] Unit Testing
- [ ] Update README

---

> Thin dom manipulation wrapper using modern browser capabilities including popular polyfill

## Quick start
### Pre-requirements
* Node version >= 6
* Npm or yarn

```bash
# clone the repo
git clone git@github.com:gairal/choux.git

# change directory to the repo
cd choux

# install the repo with npm or yarn
npm install
OR
yarn install

# start the server
gulp
```
go to [http://localhost:3000](http://localhost:3000) in your browser

---

# Table of Contents
* [File structure](#file-structure)
* [Compatibility](#compatibility)
* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running the app](#running-the-app)
* [Configuration](#configuration)
* [License](#license)

# File structure
```
gulp-webpack-es2015-stack/
 ├──config/                          * configuration files and Gulp taks
 │   ├──gulp/                        * Gulp tasks descriptions
 │   ├──.htmlhintrc                  * htmlhint configuration file
 │   ├──.eslintrc.json               * eslint configuration file
 │   ├──.sass-lint.yml               * sasslint configuration file (Yaml format)
 │   ├──config.json                  * variables used got Gulp tasks
 │   ├──karma.conf.js                * Karma configuration file
 │   └──webpack.conf.js              * Webpack configuration file
 │
 ├──src/                             * our source files that will be compiled to javascript
 │   ├──index.pug                    * our index.html
 │   │
 │   ├──html/                        * where you keep your pug templates
 │   │   └──layout.pug               * the main pug layout
 │   │
 │   ├──app/                         * JavaScript/ES2015 files
 │   │
 │   ├──static/                      * files that will be copied to the root of the compiled site (robots.txt, favicon, ...)
 │   │
 │   └──assets/                      * static assets are served here
 │       ├──img/                     * images
 │       └──scss/                    * Sass files
 │           ├──app.scss             * Main Sass files
 │           └──common/              * Sass common files
 │               ├──_bootstrap.scss  * Bootstrap Sass module import file
 │               ├──_mixins.scss     * for you own Sass mixins here
 │               └──_variables.scss  * for your sass variables
 │
 ├──test/                            * Testing directory
 │    └──spec/                       * Jasmine test definitions
 │
 │
 ├──gulpfile.js                      * gulp main configuration file
 └──package.json                     * what npm/yarn uses to manage it's dependencies
```
# Getting Started
## Dependencies
You need to install the following on you system
* `node` and `npm` (`brew install node`) or `yarn` (`brew install yarn`)
* Ensure you running Node version >= 4.0.0
* ruby (`brew install ruby`)

Then install tools you'll need to run the app
* sass (`gem install sass`)
* gulp (`npm install gulp -g`)
* karma (`npm install karma-cli -g`)

## Installing
* `fork` this repo
* `clone` your fork
* `npm install` to install all dependencies
* `gulp` to start the dev server

## Running the app
After all dependencies are installed, just run `gulp` to start a local server using `browser-sync` which will watch your files and build them.
browser-sync will display the address and port of your server (by default, `http://0.0.0.0:3000`).

### Gulp commands
#### Server
```bash
# build files then launch the server and watch files
gulp
# compiled version
gulp run:dist
```
#### Build files
```bash
# build files in ./build/ (Webpack, Sass, Jade) and validate them
gulp build
# "compile" files in ./compile/
# minify and concatenate every css and js including
# Optimize images compression
# Site ready for production
gulp compile
```
#### Validate files
```bash
# runs the validations htmlhint, eslint, csslint, sasslint, TsLint
gulp validate
```
#### Package site
```bash
# compile files then get the last git tag and create a zip named after it
gulp delivery
```
#### Deploy site
```bash
# compile the site then send it to a given server path over scp
gulp deploy
```

# Compatibility
* Chrome >=
* FF >=
* IE >= 11

# Configuration
Most of the configuration files are in ./config
* `config.json`: contains the paths to the various kind of files used by Gulp
* `.eslintrc.json`: eslint config file
* `.sass-lint.yml`: sasslint config file
* `webpack.conf.json`: Webpack config file

# License
[MIT](/LICENSE.md)

#doc
## Ajax
Use standard [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
This lib adds the [whatwg-fetch](https://www.npmjs.com/package/whatwg-fetch) polyfill

## Promise
Use standard [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
This lib adds the [es6-promise](https://www.npmjs.com/package/es6-promise) polyfill

## Events
### On
### Off

## Elements / DOM
### AddClass
### RemoveClass
### Remove class
### Append
### Prepend
### Children
### find
### Each
### Filter
### Attributes
### data
### html
### OuterHTML
### Text
### Hasclass
### Parent
### Remove
### Css
### siblings
### toggleClass
