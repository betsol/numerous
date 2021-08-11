module.exports = {
  id: 'lt',
  handler: function pluralize_lt(val) {
    const n = Number(val),
      f = parseInt(val.toString().replace(/^[^.]*\.?/, ''), 10) || 0;
    if (isNaN(n))
      throw Error('n is not a number');
    if (n % 10 === 1 && !(n % 100 >= 11 && n % 100 <= 19))
      return 'one';
    if (n % 10 === Math.floor(n % 10) && (n % 10 >= 2 && n % 10 <= 9) && !(n % 100 >= 11 && n % 100 <= 19))
      return 'few';
    if (!(f === 0))
      return 'many';
    return 'other';
  }
};
