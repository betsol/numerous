module.exports = {
  id: 'wae_ch',
  handler: function pluralize_wae_ch(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
