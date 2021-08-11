
import * as numerous from '../..';

import deLocale from '../../locales/de';
import enLocale from '../../locales/en';
import ruLocale from '../../locales/ru';

numerous.registerLocale([
  deLocale,
  enLocale,
  ruLocale,
]);

const variants = {
  apples: {
    de: {
      one: 'Apfel',
      other: 'Äpfel'
    },
    en: {
      one: 'apple',
      other: 'apples'
    },
    ru: {
      one: 'яблоко',
      few: 'яблока',
      many: 'яблок'
    },
  },
  oranges: {
    de: {
      one: 'Orangen',
      other: 'Orangen'
    },
    en: {
      one: 'orange',
      other: 'oranges'
    },
    ru: {
      one: 'апельсин',
      few: 'апельсина',
      many: 'апельсинов'
    },
  }
};

// List of additional texts for each supported locale
const texts = {
  de: {
    'i-have': 'Ich habe',
    'and': 'und'
  },
  en: {
    'i-have': 'I have',
    'and': 'and'
  },
  ru: {
    'i-have': 'У меня есть',
    'and': 'и'
  },
};

// Listening for for form submission
document.getElementById('form').addEventListener('change', event => {
  format();
});

// Initially formatting the result
format();


function getNumberFromInput(id) {
  const string = document.getElementById(id).value;
  return parseInt(string);
}

function getStringFromInput(id) {
  return document.getElementById(id).value;
}

function format() {

  // Reading locale from form
  const locale = getStringFromInput('locale');

  // Pluralizing apples
  const applesCount = getNumberFromInput('apples-count');
  const applesResult = numerous.pluralize(
    locale,
    applesCount,
    variants.apples[locale]
  );
  document.getElementById('apples-result').innerHTML = (
    applesCount + ' ' + applesResult
  );

  // Pluralizing oranges
  const orangesCount = getNumberFromInput('oranges-count');
  const orangesResult = numerous.pluralize(
    locale,
    orangesCount,
    variants.oranges[locale]
  );
  document.getElementById('oranges-result').innerHTML = (
    orangesCount + ' ' + orangesResult
  );

  // Updating other text
  for (const [key, value] of Object.entries(texts[locale])) {
    document.getElementById('text-' + key).innerHTML = value;
  }

}
