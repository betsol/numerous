module.exports = {
  id: 'hy_am',
  handler: function pluralize_hy_am(val) {
    const n = Number(val),
      i = Math.floor(Math.abs(val));
    if (isNaN(n))
      throw Error('n is not a number');
    if (i === 0 || i === 1)
      return 'one';
    return 'other';
  }
};
