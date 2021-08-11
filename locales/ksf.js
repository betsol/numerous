module.exports = {
  id: 'ksf',
  handler: function pluralize_ksf(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
