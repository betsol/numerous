module.exports = {
  id: 'se_fi',
  handler: function pluralize_se_fi(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    if (n === 2)
      return 'two';
    return 'other';
  }
};
