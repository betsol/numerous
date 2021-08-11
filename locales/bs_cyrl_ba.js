module.exports = {
  id: 'bs_cyrl_ba',
  handler: function pluralize_bs_cyrl_ba(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
