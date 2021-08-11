module.exports = {
  id: 'ms_id',
  handler: function pluralize_ms_id(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
