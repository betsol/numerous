module.exports = {
  id: 'bm_ml',
  handler: function pluralize_bm_ml(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
