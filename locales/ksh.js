module.exports = {
  id: 'ksh',
  handler: function pluralize_ksh(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 0)
      return 'zero';
    if (n === 1)
      return 'one';
    return 'other';
  }
};
