module.exports = {
  id: 'luy',
  handler: function pluralize_luy(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
