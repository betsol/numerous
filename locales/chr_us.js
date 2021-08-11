module.exports = {
  id: 'chr_us',
  handler: function pluralize_chr_us(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
