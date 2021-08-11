module.exports = {
  id: 'kkj',
  handler: function pluralize_kkj(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
