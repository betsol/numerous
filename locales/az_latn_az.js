module.exports = {
  id: 'az_latn_az',
  handler: function pluralize_az_latn_az(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
