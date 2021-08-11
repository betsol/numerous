module.exports = {
  id: 'kl_gl',
  handler: function pluralize_kl_gl(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
