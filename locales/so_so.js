module.exports = {
  id: 'so_so',
  handler: function pluralize_so_so(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
