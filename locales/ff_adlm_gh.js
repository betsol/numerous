module.exports = {
  id: 'ff_adlm_gh',
  handler: function pluralize_ff_adlm_gh(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
