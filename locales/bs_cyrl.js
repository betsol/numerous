module.exports = {
  id: 'bs_cyrl',
  handler: function pluralize_bs_cyrl(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
