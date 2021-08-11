module.exports = {
  id: 'mg',
  handler: function pluralize_mg(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === Math.floor(n) && (n >= 0 && n <= 1))
      return 'one';
    return 'other';
  }
};
