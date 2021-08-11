#!/usr/bin/env node

const { writeFile } = require('fs');
const { promisify } = require('util');
const { resolve: resolvePath } = require('path');

const $writeFile = promisify(writeFile);

const cldr = require('cldr');
const del = require('del');
const pLimit = require('p-limit');
const { js: beautifyJs } = require('js-beautify');


const concurrency = 16;
const destinationPath = resolvePath(`${__dirname}/../locales`);


(async function buildLocales() {

  // Deleting content of the destination directory,
  // but not the directory itself
  await del([
    `${destinationPath}/**`,
    `!${destinationPath}/`
  ]);

  const limit = pLimit(concurrency);

  const tasks = cldr.localeIds.map(localeId => limit(async () => {

    const pluralFunction = cldr.extractPluralRuleFunction(localeId);

    await writePluralFunctionToFileForLocale(localeId, pluralFunction);

  }));

  // Processing all the tasks concurrently
  await Promise.all(tasks);

  console.log(`${cldr.localeIds.length} locale(s) built successfully`);

  await buildListOfSupportedLocales(cldr.localeIds);

})();


//===========//
// FUNCTIONS //
//===========//

async function writePluralFunctionToFileForLocale(localeId, pluralFunction) {

  let source = (
    `module.exports = { ` +
    `  id: '${localeId}', ` +
    `  handler: ${pluralFunction.toString()}` +
    `};`
  );

  // Replacing function name for convenience
  source = source.replace('anonymous', 'pluralize_' + localeId);

  source = beautifyJs(source, {
    indent_size: 2,
    end_with_newline: true,
    preserve_newlines: true,
  });

  // Writing source to a file
  await $writeFile(
    `${destinationPath}/${localeId}.js`,
    source
  );

  console.log('Plural function written to file for locale: ' + localeId);

}

async function buildListOfSupportedLocales(supportedLocaleIds) {
  
  const lines = [
    `# List of locales supported by Numerous\n`,
    `Right now **` + supportedLocaleIds.length + `** locales are supported.\n`,
    `Locale |`,
    `--- |`,
    ...supportedLocaleIds.map(
      localeId => `[${localeId}](../locales/${localeId}.js) |`
    ),
  ];

  await $writeFile('./docs/locales.md', lines.join("\n"));

  console.log('List of locales created');

}
