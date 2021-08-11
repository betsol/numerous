module.exports = {
  id: 'ka_ge',
  handler: function pluralize_ka_ge(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
