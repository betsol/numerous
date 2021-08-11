module.exports = {
  id: 'dz',
  handler: function pluralize_dz(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
