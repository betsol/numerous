module.exports = {
  id: 'ms',
  handler: function pluralize_ms(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
