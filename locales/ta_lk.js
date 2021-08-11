module.exports = {
  id: 'ta_lk',
  handler: function pluralize_ta_lk(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
