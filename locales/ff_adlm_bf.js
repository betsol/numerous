module.exports = {
  id: 'ff_adlm_bf',
  handler: function pluralize_ff_adlm_bf(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
