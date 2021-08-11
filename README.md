
# Numerous

[![npm version](https://badge.fury.io/js/numerous.svg)][repo-npm]
[![Build Status](https://travis-ci.com/betsol/numerous.svg?branch=master)](https://travis-ci.com/betsol/numerous)
[![Maintainability](https://api.codeclimate.com/v1/badges/7a5986d640437b0949f2/maintainability)](https://codeclimate.com/github/betsol/numerous/maintainability)


Tiny pluralization library in JavaScript that supports almost any language.

For more details, please, read the article:<br>
[How to pluralize any word in different languages using JavaScript?][article]


## Features

- a completely stand-alone solution (no APIs or polyfills required)
- supports **789** locales by means of [CLDR][lib-cldr] (built-in).
  See the [complete list][locales]
- could be run in Node.js or browser
- very lightweight *(just ~300 Bytes compressed)*
- almost no dependencies
- TypeScript support out of the box


## Demo

Please see [the demo][demo].


## Install

```shell
npm install --save numerous
```


## Usage

### Node.js

In Node.js environment the library automatically loads
the required locales on first use.

```js
const numerous = require('numerous');

// Create an instance of Numerous using preferred locale
const { pluralize } = numerous.create('en');

// Specify the list of variants
const variants = {
  one: 'apple',
  other: 'apples',
};

// Pluralize!

// I have 1 apple
const applesCount = 1;
console.log(`I have ${applesCount} ${pluralize(applesCount, variants)}`);

// She had 5 apples
const applesCount = 5;
console.log(`She had ${applesCount} ${pluralize(applesCount, variants)}`);
```


### Browser

In browser environment you need to load all the locales that you are
planning to use before initializing the instance of Numerous.
This is done in order to provide optimal bundle size.

```js
import * as numerous from 'numerous';

import enLocale from 'numerous/locales/en';
import ruLocale from 'numerous/locales/ru';

// Register single locale
numerous.registerLocale(enLocale);

// Or register multiple locales at the same time
numerous.registerLocale([
  enLocale,
  ruLocale,
]);

// Create an instance of Numerous
// using previously registered locale
const { pluralize } = numerous.create('en');

// Specify the list of variants
const variants = {
  one: 'apple',
  other: 'apples',
};

// Pluralize!

// I have 1 apple
const applesCount = 1;
console.log(`I have ${applesCount} ${pluralize(applesCount, variants)}`);

// She had 5 apples
const applesCount = 5;
console.log(`She had ${applesCount} ${pluralize(applesCount, variants)}`);
```


### Without instantiating

You can use the library without instantiating it first.
You just need to specify the locale on each call.

```js

// "apple"
numerous.pluralize('en', 1, {
  one: 'apple',
  other: 'apples'
});

// "cats"
numerous.pluralize('en', 2, {
  one: 'cat',
  other: 'cats'
});
```

## Examples

Please see [test files](./test) for more use cases.


## Changelog

Please see the [complete changelog][changelog] for list of changes.


## Contributors

- [Slava Fomin II](https://github.com/slavafomin) (author)


## Developer Guide

Fork, clone, create a feature branch, add tests, commit, create a PR.

Run:

- `npm install` to initialize the project
- `npm run build-locales` to build fresh locales
- `npm test` to test the library
- `npm run demo:run` to run local webserver with demo page
- `npm run demo:deploy` to deploy GitHub Pages


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

ⓒ 2015—2021 Slava Fomin II

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


  [changelog]: CHANGELOG.md
  [contributors]: https://github.com/betsol/numerous/graphs/contributors
  [so-ask]: http://stackoverflow.com/questions/ask?tags=node.js
  [email]: mailto:slava@fomin.io
  [new-issue]: https://github.com/betsol/numerous/issues/new
  [locales]: docs/locales.md
  [lib-cldr]: https://github.com/papandreou/node-cldr
  [repo-gh]: https://github.com/betsol/numerous
  [repo-npm]: https://www.npmjs.com/package/numerous
  [demo]: http://betsol.github.io/numerous/
  [article]: https://gist.github.com/slavafomin/f2e5259cab17d55af5d9fa4c2c2baa08
