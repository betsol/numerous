module.exports = {
  id: 'naq',
  handler: function pluralize_naq(val) {
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
