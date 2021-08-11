module.exports = {
  id: 'ksb',
  handler: function pluralize_ksb(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
