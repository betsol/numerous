module.exports = {
  id: 'su_latn',
  handler: function pluralize_su_latn(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
