module.exports = {
  id: 'ff_adlm_ne',
  handler: function pluralize_ff_adlm_ne(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
