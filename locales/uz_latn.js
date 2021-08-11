module.exports = {
  id: 'uz_latn',
  handler: function pluralize_uz_latn(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
