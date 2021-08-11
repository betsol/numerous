module.exports = {
  id: 'uz_latn_uz',
  handler: function pluralize_uz_latn_uz(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
