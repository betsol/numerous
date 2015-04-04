#!/usr/bin/env node

var cldr = require('cldr');
var fs = require('fs');
var beautify = require('node-beautify').beautifyJs;
var async = require('async');

var tasks = [];
var supportedLocales = [];

for (var key in cldr.localeIds) {
  if (!cldr.localeIds.hasOwnProperty(key)) {
    continue;
  }
  var locale = cldr.localeIds[key];

  var pluralFunction = cldr.extractPluralRuleFunction(locale);
  if ('undefined' === typeof pluralFunction(1)) {
    console.log('Missing plural function for locale: ' + locale + ', skipping');
    continue;
  }

  // Adding task to a list.
  (function (locale, pluralFunction) {
    tasks.push(function (callback) {
      writePluralFunctionToFileForLocale(locale, pluralFunction, callback);
    });
  })(locale, pluralFunction);

  supportedLocales.push(locale);

}

// Running all tasks in parallel.
async.parallel(tasks, function (error, results) {
  if (error) {
    console.log(error);
  } else {
    buildListOfSupportedLocales(function (error) {
      if (error) {
        console.log(error);
      } else {
        console.log('Locales built successfully');
      }
    });
  }
});


//===========//
// FUNCTIONS //
//===========//

function writePluralFunctionToFileForLocale (locale, pluralFunction, callback) {

  // Building the source.
  var source =
    "var numerous = require('../lib/numerous.js');" +
    "var pluralize = " + pluralFunction.toString() + ";" +
    "numerous.addLocale('" + locale + "', pluralize);"
  ;

  // Replacing function name for convenience.
  source = source.replace('anonymous', 'pluralize_' + locale);

  // Beautifying the source.
  source = beautify(source);

  // Writing source to a file.
  var path = './locales/' + locale + '.js';
  fs.writeFile(path, source, function (error) {
    if (error) {
      callback(error);
    }
    console.log('Plural function written to file for locale: ' + locale);
    callback();
  });

}

function buildListOfSupportedLocales (callback) {

  var source =
    '# List of locales supported by Numerous' + "\n\n" +
    'Right now **' + supportedLocales.length + '** locales are supported.' + "\n\n" +
    'Locale |' + "\n" +
    '--- |' + "\n"
  ;

  supportedLocales.forEach(function (locale) {
    source += '[' + locale + '](../locales/' + locale + '.js)' + ' |' + "\n";
  });

  fs.writeFile('./docs/locales.md', source, function (error) {
    if (error) {
      callback(error);
    }
    console.log('List of locales created');
    callback();
  });
}
