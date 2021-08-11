module.exports = {
  id: 'fur_it',
  handler: function pluralize_fur_it(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
