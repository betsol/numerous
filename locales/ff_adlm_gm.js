module.exports = {
  id: 'ff_adlm_gm',
  handler: function pluralize_ff_adlm_gm(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
