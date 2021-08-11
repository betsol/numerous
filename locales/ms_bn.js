module.exports = {
  id: 'ms_bn',
  handler: function pluralize_ms_bn(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
