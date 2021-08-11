module.exports = {
  id: 'ks_arab',
  handler: function pluralize_ks_arab(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
