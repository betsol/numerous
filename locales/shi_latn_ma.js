module.exports = {
  id: 'shi_latn_ma',
  handler: function pluralize_shi_latn_ma(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
