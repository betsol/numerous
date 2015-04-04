
var locales = {};

module.exports = {
  create: factory,
  addLocale: addLocale,
  pluralize: pluralize
};

/**
 * Adds pluralization function for specified locale.
 *
 * @param {string} locale
 * @param {function} callable
 */
function addLocale (locale, callable) {
  locales[locale] = callable;
}

/**
 * Creates new instance of numerous.
 *
 * @param {string} locale
 * @returns {object}
 */
function factory (locale) {

  checkLocaleSupport(locale);

  return {
    pluralize: function (value, variants) {
      return pluralize(locale, value, variants);
    }
  };
}

/**
 * Checks if locale is supported. Throws exception if not.
 */
function checkLocaleSupport (locale) {
  if ('undefined' === typeof locales[locale]) {
    throw new Error('Pluralization is not supported for locale: ' + locale);
  }
}

/**
 * Returns variant from the specified list of variants
 * according to the specified value and locale.
 *
 * @param {string} locale
 * @param {int} value
 * @param {object} variants
 */
function pluralize (locale, value, variants) {

  checkLocaleSupport(locale);

  if ('object' !== typeof variants) {
    throw new Error('List of variants should be specified as an object');
  }

  var key = locales[locale](value);

  return ('undefined' !== typeof variants[key] ? variants[key] : null);
}
