module.exports = {
  id: 'ga',
  handler: function pluralize_ga(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    if (n === 2)
      return 'two';
    if (n === Math.floor(n) && (n >= 3 && n <= 6))
      return 'few';
    if (n === Math.floor(n) && (n >= 7 && n <= 10))
      return 'many';
    return 'other';
  }
};
