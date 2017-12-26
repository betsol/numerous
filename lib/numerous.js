(function () {

  'use strict';

  var root = this;


  //=========//
  // GLOBALS //
  //=========//

  var locales = {};


  //==========//
  // EXPOSING //
  //==========//

  var moduleDefinition = {
    create: factory,
    addLocale: addLocale,
    pluralize: pluralize
  };

  if ('undefined' !== typeof module && 'undefined' !== typeof module.exports) {
    module.exports = moduleDefinition;
  } else {
    root.numerous = moduleDefinition;
  }


  //==================//
  // PUBLIC FUNCTIONS //
  //==================//

  /**
   * Creates new instance of numerous.
   *
   * @param {string} locale
   * @returns {object}
   */
  function factory (locale) {

    checkLocale(locale);

    return {
      pluralize: function (value, variants) {
        return pluralize(locale, value, variants);
      }
    };
  }

  /**
   * Adds pluralization function for specified locale.
   * Usually externally called by locale itself.
   *
   * @param {string} locale
   * @param {function} callable
   */
  function addLocale (locale, callable) {
    locales[locale] = callable;
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

    checkLocale(locale);

    if ('object' !== typeof variants) {
      throw new Error('List of variants should be specified as an object');
    }

    var key = locales[locale](value);

    return ('undefined' !== typeof variants[key] ? variants[key] : null);
  }


  //===================//
  // PRIVATE FUNCTIONS //
  //===================//

  /**
   * Returns true if specified locale is loaded, false otherwise.
   *
   * @param {string} locale
   *
   * @returns {boolean}
   */
  function hasLocale (locale) {
    return ('undefined' !== typeof locales[locale]);
  }

  /**
   * Checks if locale is loaded. If not, tries to load it.
   *
   * @param {string} locale
   */
  function checkLocale (locale) {
    if (!hasLocale(locale)) {
      requireLocale(locale);
    }
  }

  /**
   * Tries to load the specified locale.
   *
   * @param {string} locale
   */
  function requireLocale (locale) {
    try {
      require(__dirname + '/../locales/' + locale + '.js');
    } catch (error) {
      throw Error('Failed to load the following locale: ' + locale);
    }
  }

}).call(this);
