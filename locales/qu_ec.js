module.exports = {
  id: 'qu_ec',
  handler: function pluralize_qu_ec(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
