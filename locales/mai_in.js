module.exports = {
  id: 'mai_in',
  handler: function pluralize_mai_in(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
