module.exports = {
  id: 'twq_ne',
  handler: function pluralize_twq_ne(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
