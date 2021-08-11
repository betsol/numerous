module.exports = {
  id: 'sr_latn_xk',
  handler: function pluralize_sr_latn_xk(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
