module.exports = {
  id: 'dje_ne',
  handler: function pluralize_dje_ne(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
