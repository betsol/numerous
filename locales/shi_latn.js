module.exports = {
  id: 'shi_latn',
  handler: function pluralize_shi_latn(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
