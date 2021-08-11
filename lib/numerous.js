
const isNode = require('is-node');


//=========//
// GLOBALS //
//=========//

const locales = {};


//=========//
// EXPORTS //
//=========//

module.exports = {
  create: numerousFactory,
  registerLocale,
  pluralize,
};


//==================//
// PUBLIC FUNCTIONS //
//==================//

/**
 * Creates new instance of numerous.
 *
 * @param {string} localeId
 * @returns {object}
 */
function numerousFactory(localeId) {

  ensureLocaleRegisteredOrThrow(localeId);

  return {
    pluralize: (value, variants) => (
      pluralize(localeId, value, variants)
    ),
  };

}

/**
 * Adds pluralization function for specified locale.
 * Usually externally called by locale itself.
 *
 * @param {object} localeOrLocales
 */
function registerLocale(localeOrLocales) {
  if (!Array.isArray(localeOrLocales)) {
    localeOrLocales = [localeOrLocales];
  }
  for (const locale of localeOrLocales) {
    locales[locale.id] = locale;
  }
}

/**
 * Returns variant from the specified list of variants
 * according to the specified value and locale.
 *
 * @param {string} localeId
 * @param {int} value
 * @param {object} variants
 *
 * @return {string | undefined}
 */
function pluralize(localeId, value, variants) {

  ensureLocaleRegisteredOrThrow(localeId);

  if (!variants || 'object' !== typeof variants) {
    throw new Error('List of variants should be specified as a valid object');
  }

  const locale = locales[localeId];

  const key = locale.handler(value);

  return (variants[key] || undefined);

}


//===================//
// PRIVATE FUNCTIONS //
//===================//

/**
 * Checks if locale is loaded. If not, tries to load it.
 *
 * @param {string} localeId
 */
function ensureLocaleRegisteredOrThrow(localeId) {

  if (hasLocale(localeId)) {
    return;
  }

  if (isNode) {
    // In Node.js we could just load the required locale automatically
    requireLocale(localeId);

  } else {
    throw new Error(
      `Locale: ${localeId} is not registered with numerous. ` +
      `You need to manually register it before use`
    );
  }

}

/**
 * Returns true if specified locale is loaded, false otherwise.
 *
 * @param {string} localeId
 *
 * @returns {boolean}
 */
function hasLocale(localeId) {
  return Boolean(locales[localeId]);
}

/**
 * Tries to load the specified locale.
 *
 * @param {string} localeId
 */
function requireLocale(localeId) {
  try {
    const locale = require(`${__dirname}/../locales/${localeId}.js`);
    registerLocale(locale);

  } catch (error) {
    throw Error(`Failed to require locale: ${localeId}`);

  }
}
