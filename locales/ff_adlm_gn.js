module.exports = {
  id: 'ff_adlm_gn',
  handler: function pluralize_ff_adlm_gn(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
