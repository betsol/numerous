module.exports = {
  id: 'rn',
  handler: function pluralize_rn(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
