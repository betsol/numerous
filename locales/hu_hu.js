module.exports = {
  id: 'hu_hu',
  handler: function pluralize_hu_hu(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
