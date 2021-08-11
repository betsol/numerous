module.exports = {
  id: 'ii',
  handler: function pluralize_ii(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
