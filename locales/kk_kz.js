module.exports = {
  id: 'kk_kz',
  handler: function pluralize_kk_kz(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
