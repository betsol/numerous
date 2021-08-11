module.exports = {
  id: 'sa_in',
  handler: function pluralize_sa_in(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
