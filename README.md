# Numerous

Smallest possible pluralization implementation in JavaScript.

Right now, it supports ~629 locales by means of [CLDR][lib-cldr].
See the [complete list][locales].


## Usage

1. Require library
2. Require needed locales
3. Create an instance for specific locale (optional)
4. Pluralize!


### Examples

#### Direct example

```javascript

var numerous = require('../lib/numerous.js');

// Adding locales.
require('../locales/en.js');

// Returns "apple".
numerous.pluralize('en', 1, {
  one: 'apple',
  other: 'apples'
});

// Returns "cats".
pluralize('en', 2, {
  one: 'cat',
  other: 'cats'
});

```

#### Example with instantiation

```javascript

var numerous = require('../lib/numerous.js');

// Adding locales.
require('../locales/ru.js');
require('../locales/en.js');

// Creating instance for specific locale.
var pluralize = numerous.create('en').pluralize;

// Returns "apple".
pluralize(1, {
  one: 'apple',
  other: 'apples'
});

// Returns "cats".
pluralize(2, {
  one: 'cat',
  other: 'cats'
});

```


## Installation

It's exactly like you've already guessed:

`npm install --save numerous` or `npm install --save-dev numerous`.


## Configuration

No configuration is required.


## Changelog

Please see the [complete changelog][changelog] for list of changes.


## Contributors

This library was made possible by [it's contributors][contributors].


## Developer guide

- Run `make locales` to build fresh list of locales.
- Run `make test` to test the library.


## Feedback

If you have found a bug or have another issue with the library —
please [create an issue][new-issue].

If you have a question regarding the library or it's integration with your project —
consider asking a question at [StackOverflow][so-ask] and sending me a
link via [E-Mail][email]. I will be glad to help.

Have any ideas or propositions? Feel free to contact me by [E-Mail][email].

Cheers!


## License

The MIT License (MIT)

Copyright (c) 2015 Slava Fomin II, BETTER SOLUTIONS

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
