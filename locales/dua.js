module.exports = {
  id: 'dua',
  handler: function pluralize_dua(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
