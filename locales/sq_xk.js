module.exports = {
  id: 'sq_xk',
  handler: function pluralize_sq_xk(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
