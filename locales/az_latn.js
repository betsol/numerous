module.exports = {
  id: 'az_latn',
  handler: function pluralize_az_latn(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
