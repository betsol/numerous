module.exports = {
  id: 'mt_mt',
  handler: function pluralize_mt_mt(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    if (n === 0 || n % 100 === Math.floor(n % 100) && (n % 100 >= 2 && n % 100 <= 10))
      return 'few';
    if (n % 100 === Math.floor(n % 100) && (n % 100 >= 11 && n % 100 <= 19))
      return 'many';
    return 'other';
  }
};
