module.exports = {
  id: 'mi',
  handler: function pluralize_mi(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
