var expect = require('expect.js');

var numerous = require('../lib/numerous.js');


describe('Numerous', function () {

  context('with Russian locale', function () {

    it('pluralizes correctly', function (done) {
      var pluralize = numerous.create('ru').pluralize;
      var variants = {
        one: 'яблоко',
        few: 'яблока',
        many: 'яблок'
      };
      expect(pluralize(1, variants)).to.be('яблоко');
      expect(pluralize(2, variants)).to.be('яблока');
      expect(pluralize(3, variants)).to.be('яблока');
      expect(pluralize(4, variants)).to.be('яблока');
      expect(pluralize(5, variants)).to.be('яблок');
      expect(pluralize(6, variants)).to.be('яблок');
      expect(pluralize(7, variants)).to.be('яблок');
      expect(pluralize(8, variants)).to.be('яблок');
      expect(pluralize(9, variants)).to.be('яблок');
      expect(pluralize(10, variants)).to.be('яблок');
      expect(pluralize(11, variants)).to.be('яблок');
      expect(pluralize(21, variants)).to.be('яблоко');
      expect(pluralize(22, variants)).to.be('яблока');
      expect(pluralize(25, variants)).to.be('яблок');
      expect(pluralize(1000000, variants)).to.be('яблок');
      done();
    });

  });

  context('with English locale', function () {

    it('pluralizes correctly', function (done) {
      var pluralize = numerous.create('en').pluralize;
      var variants = {
        one: 'apple',
        other: 'apples'
      };
      expect(pluralize(1, variants)).to.be('apple');
      expect(pluralize(2, variants)).to.be('apples');
      expect(pluralize(3, variants)).to.be('apples');
      expect(pluralize(4, variants)).to.be('apples');
      expect(pluralize(5, variants)).to.be('apples');
      expect(pluralize(6, variants)).to.be('apples');
      expect(pluralize(7, variants)).to.be('apples');
      expect(pluralize(8, variants)).to.be('apples');
      expect(pluralize(9, variants)).to.be('apples');
      expect(pluralize(10, variants)).to.be('apples');
      expect(pluralize(1000000, variants)).to.be('apples');
      done();
    });

  });

  context('without instantiation', function () {

    it('pluralizes correctly', function (done) {
      var result = numerous.pluralize('en', 1, {
        one: 'apple'
      });
      expect(result).to.be('apple');
      done();
    });

  });

});
