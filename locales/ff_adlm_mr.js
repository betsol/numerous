module.exports = {
  id: 'ff_adlm_mr',
  handler: function pluralize_ff_adlm_mr(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
