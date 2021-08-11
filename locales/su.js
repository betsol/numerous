module.exports = {
  id: 'su',
  handler: function pluralize_su(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
