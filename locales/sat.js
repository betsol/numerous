module.exports = {
  id: 'sat',
  handler: function pluralize_sat(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    if (n === 2)
      return 'two';
    return 'other';
  }
};
