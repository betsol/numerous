module.exports = {
  id: 'tzm_ma',
  handler: function pluralize_tzm_ma(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === Math.floor(n) && (n >= 0 && n <= 1) || n === Math.floor(n) && (n >= 11 && n <= 99))
      return 'one';
    return 'other';
  }
};
