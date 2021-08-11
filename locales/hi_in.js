module.exports = {
  id: 'hi_in',
  handler: function pluralize_hi_in(val) {
    const n = Number(val),
      i = Math.floor(Math.abs(val));
    if (isNaN(n))
      throw Error('n is not a number');
    if (i === 0 || n === 1)
      return 'one';
    return 'other';
  }
};
