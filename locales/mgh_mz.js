module.exports = {
  id: 'mgh_mz',
  handler: function pluralize_mgh_mz(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
