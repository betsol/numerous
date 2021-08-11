module.exports = {
  id: 'ff_adlm_ng',
  handler: function pluralize_ff_adlm_ng(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
