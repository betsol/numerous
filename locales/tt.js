module.exports = {
  id: 'tt',
  handler: function pluralize_tt(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
