module.exports = {
  id: 'ks_arab_in',
  handler: function pluralize_ks_arab_in(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
