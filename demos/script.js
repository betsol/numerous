(function () {

  'use strict';

  // List of pluralization variants for each supported locale.
  var VARIANTS = {
    APPLES: {
      en: {
        one: 'apple',
        other: 'apples'
      },
      ru: {
        one: 'яблоко',
        few: 'яблока',
        many: 'яблок'
      }
    },
    ORANGES: {
      en: {
        one: 'orange',
        other: 'oranges'
      },
      ru: {
        one: 'апельсин',
        few: 'апельсина',
        many: 'апельсинов'
      }
    }
  };

  // List of additional texts for each supported locale.
  var TEXTS = {
    en: {
      'i-have': 'I have',
      'and': 'and'
    },
    ru: {
      'i-have': 'У меня есть',
      'and': 'и'
    }
  };

  // Listening for for form submission.
  document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    format();
  });

  // Listening for for locale change.
  document.getElementById('locale').addEventListener('input', function (event) {
    event.preventDefault();
    format();
  });

  // Initially formatting the result.
  format();


  function getNumberFromInput (id) {
    var string = document.getElementById(id).value;
    return parseInt(string);
  }

  function getStringFromInput (id) {
    return document.getElementById(id).value;
  }

  function format () {

    // Reading locale from form.
    var locale = getStringFromInput('locale');

    // Pluralizing apples.
    var applesCount = getNumberFromInput('apples-count');
    var applesResult = numerous.pluralize(locale, applesCount, VARIANTS.APPLES[locale]);
    document.getElementById('apples-result').innerHTML = applesCount + ' ' + applesResult;

    // Pluralizing oranges.
    var orangesCount = getNumberFromInput('oranges-count');
    var orangesResult = numerous.pluralize(locale, orangesCount, VARIANTS.ORANGES[locale]);
    document.getElementById('oranges-result').innerHTML = orangesCount + ' ' + orangesResult;

    // Updating other text.
    var textStore = TEXTS[locale];
    for (var key in textStore) {
      if (textStore.hasOwnProperty(key)) {
        document.getElementById('text-' + key).innerHTML = textStore[key];
      }
    }

  }

})();
