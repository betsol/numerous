(function () {

  'use strict';

  document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    format();
  });

  format();


  function getNumberFromInput (id) {
    var string = document.getElementById(id).value;
    return parseInt(string);
  }

  function format () {
    var applesCount = getNumberFromInput('apples-count');
    var orangesCount = getNumberFromInput('oranges-count');
    var applesResult = numerous.pluralize('en', applesCount, {
      one: 'apple',
      other: 'apples'
    });
    var orangesResult = numerous.pluralize('en', orangesCount, {
      one: 'orange',
      other: 'oranges'
    });
    document.getElementById('apples-result').innerHTML = applesCount + ' ' + applesResult;
    document.getElementById('oranges-result').innerHTML = orangesCount + ' ' + orangesResult;
  }

})();
