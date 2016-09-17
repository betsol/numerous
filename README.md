# Numerous

[![npm version](https://badge.fury.io/js/numerous.svg)][repo-npm]
![Bower](https://img.shields.io/bower/v/numerous.svg)
[![Build Status](https://travis-ci.org/betsol/numerous.svg)](https://travis-ci.org/betsol/numerous)


Tiny pluralization library in JavaScript that supports almost any language.


## Features

- supports ~639 locales by means of [CLDR][lib-cldr] (built-in). See the [complete list][locales].
- could be run in node or browser environment


## Demo

Please see [the demo][site].


## Usage

1. Require library
2. ???
3. Pluralize!


### With Node

1). Install module via npm: `npm i -S numerous`.

2). Require it:

```js
const numerous = require('numerous');
```


### In browser

1). Install package via Bower: `bower install --save betsol/numerous`.

2). Add library to your page: 

```html
<script src="/bower_components/numerous/lib/numerous.js"></script>
```

3). Add required locales to your page:

```html
<script src="/bower_components/numerous/locales/en.js"></script>
<script src="/bower_components/numerous/locales/ru.js"></script>
```

You could use npm instead of bower above.


## Examples

### Static Example

```js

// Returns "apple".
numerous.pluralize('en', 1, {
  one: 'apple',
  other: 'apples'
});

// Returns "cats".
numerous.pluralize('en', 2, {
  one: 'cat',
  other: 'cats'
});

```

### Instance Example

```js

// Creating instances for specific locales.
var englishPluralizer = numerous.create('en');
var russianPluralizer = numerous.create('ru');

// Returns "apple".
englishPluralizer.pluralize(1, {
  one: 'apple',
  other: 'apples'
});

// Returns "яблока".
russianPluralizer.pluralize(2, {
  one: 'яблоко',
  few: 'яблока',
  many: 'яблок'
});

```


## Changelog

Please see the [complete changelog][changelog] for list of changes.


## Contributors

This library was made possible by [it's contributors][contributors].


## Developer guide

Fork, clone, create a feature branch, add tests, commit, create a PR.

Run:

- `npm install && bower install` to initialize the project
- `npm run-script build-locales` to build fresh list of locales
- `npm test` to test the library
- `npm start` to run local webserver for demos page
- `npm run-script demo-deploy` to deploy GitHub Pages


## Feedback

If you have found a bug or have another issue with the library —
please [create an issue][new-issue].

If you have a question regarding the library or it's integration with your project —
consider asking a question at [StackOverflow][so-ask] and sending me a
link via [E-Mail][email]. I will be glad to help.

Have any ideas or propositions? Feel free to contact me by [E-Mail][email].

Cheers!


## Support

If you like this library consider to add star on [GitHub repository][repo-gh]
and on [NPM][repo-npm].

Thank you!


## License

The MIT License (MIT)

Copyright (c) 2015-2016 Slava Fomin II, BETTER SOLUTIONS

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


  [changelog]: changelog.md
  [contributors]: https://github.com/betsol/numerous/graphs/contributors
  [so-ask]: http://stackoverflow.com/questions/ask?tags=node.js
  [email]: mailto:s.fomin@betsol.ru
  [new-issue]: https://github.com/betsol/numerous/issues/new
  [locales]: docs/locales.md
  [lib-cldr]: https://github.com/papandreou/node-cldr
  [repo-gh]: https://github.com/betsol/numerous
  [repo-npm]: https://www.npmjs.com/package/numerous
  [site]: http://betsol.github.io/numerous/
