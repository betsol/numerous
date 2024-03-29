module.exports = {
  id: 'be_by',
  handler: function pluralize_be_by(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n % 10 === 1 && !(n % 100 === 11))
      return 'one';
    if (n % 10 === Math.floor(n % 10) && (n % 10 >= 2 && n % 10 <= 4) && !(n % 100 >= 12 && n % 100 <= 14))
      return 'few';
    if (n % 10 === 0 || (n % 10 === Math.floor(n % 10) && (n % 10 >= 5 && n % 10 <= 9) || n % 100 === Math.floor(n % 100) && (n % 100 >= 11 && n % 100 <= 14)))
      return 'many';
    return 'other';
  }
};
