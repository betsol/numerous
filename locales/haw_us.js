module.exports = {
  id: 'haw_us',
  handler: function pluralize_haw_us(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
