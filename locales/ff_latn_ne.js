module.exports = {
  id: 'ff_latn_ne',
  handler: function pluralize_ff_latn_ne(val) {
    const n = Number(val),
      i = Math.floor(Math.abs(val));
    if (isNaN(n))
      throw Error('n is not a number');
    if (i === 0 || i === 1)
      return 'one';
    return 'other';
  }
};
