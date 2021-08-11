module.exports = {
  id: 'lkt_us',
  handler: function pluralize_lkt_us(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
