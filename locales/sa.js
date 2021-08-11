module.exports = {
  id: 'sa',
  handler: function pluralize_sa(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
