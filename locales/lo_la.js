module.exports = {
  id: 'lo_la',
  handler: function pluralize_lo_la(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
