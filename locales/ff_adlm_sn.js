module.exports = {
  id: 'ff_adlm_sn',
  handler: function pluralize_ff_adlm_sn(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
