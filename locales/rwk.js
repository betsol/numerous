module.exports = {
  id: 'rwk',
  handler: function pluralize_rwk(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
