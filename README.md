# sheetify-autoprefixer
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

[wip] `autoprefixer` as a sheetify text transform.

## Installation
```bash
npm install sheetify-autoprefixer
```

## Usage
As a sheetify transform:
```js
var prefix = require('sheetify-autoprefixer');
var sheetify = require('sheetify');

sheetify('path/to/my/index.css')
  .transform(prefix())
  .bundle();
```

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/sheetify-autoprefixer.svg?style=flat-square
[npm-url]: https://npmjs.org/package/sheetify-autoprefixer
[travis-image]: https://img.shields.io/travis/yoshuawuyts/sheetify-autoprefixer.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/sheetify-autoprefixer
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/sheetify-autoprefixer.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/sheetify-autoprefixer?branch=master
[downloads-image]: http://img.shields.io/npm/dm/sheetify-autoprefixer.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/sheetify-autoprefixer
