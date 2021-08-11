module.exports = {
  id: 'ms_sg',
  handler: function pluralize_ms_sg(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
