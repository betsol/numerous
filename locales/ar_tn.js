module.exports = {
  id: 'ar_tn',
  handler: function pluralize_ar_tn(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 0)
      return 'zero';
    if (n === 1)
      return 'one';
    if (n === 2)
      return 'two';
    if (n % 100 === Math.floor(n % 100) && (n % 100 >= 3 && n % 100 <= 10))
      return 'few';
    if (n % 100 === Math.floor(n % 100) && (n % 100 >= 11 && n % 100 <= 99))
      return 'many';
    return 'other';
  }
};
