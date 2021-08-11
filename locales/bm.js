module.exports = {
  id: 'bm',
  handler: function pluralize_bm(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
