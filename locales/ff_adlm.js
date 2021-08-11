module.exports = {
  id: 'ff_adlm',
  handler: function pluralize_ff_adlm(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
