module.exports = {
  id: 'mi_nz',
  handler: function pluralize_mi_nz(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
