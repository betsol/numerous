module.exports = {
  id: 'gd_gb',
  handler: function pluralize_gd_gb(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1 || n === 11)
      return 'one';
    if (n === 2 || n === 12)
      return 'two';
    if (n === Math.floor(n) && (n >= 3 && n <= 10 || n >= 13 && n <= 19))
      return 'few';
    return 'other';
  }
};
