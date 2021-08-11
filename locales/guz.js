module.exports = {
  id: 'guz',
  handler: function pluralize_guz(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
