module.exports = {
  id: 'zgh_ma',
  handler: function pluralize_zgh_ma(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
