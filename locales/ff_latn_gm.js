module.exports = {
  id: 'ff_latn_gm',
  handler: function pluralize_ff_latn_gm(val) {
    const n = Number(val),
      i = Math.floor(Math.abs(val));
    if (isNaN(n))
      throw Error('n is not a number');
    if (i === 0 || i === 1)
      return 'one';
    return 'other';
  }
};
