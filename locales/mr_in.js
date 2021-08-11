module.exports = {
  id: 'mr_in',
  handler: function pluralize_mr_in(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
