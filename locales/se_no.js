module.exports = {
  id: 'se_no',
  handler: function pluralize_se_no(val) {
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
