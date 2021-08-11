module.exports = {
  id: 'mai',
  handler: function pluralize_mai(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
