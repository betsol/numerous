module.exports = {
  id: 'ms_my',
  handler: function pluralize_ms_my(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
