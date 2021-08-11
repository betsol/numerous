module.exports = {
  id: 'ff_adlm_sl',
  handler: function pluralize_ff_adlm_sl(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
