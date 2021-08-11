module.exports = {
  id: 'ta_sg',
  handler: function pluralize_ta_sg(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
