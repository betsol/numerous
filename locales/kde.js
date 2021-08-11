module.exports = {
  id: 'kde',
  handler: function pluralize_kde(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
