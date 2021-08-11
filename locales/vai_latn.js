module.exports = {
  id: 'vai_latn',
  handler: function pluralize_vai_latn(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
