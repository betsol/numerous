module.exports = {
  id: 'sbp',
  handler: function pluralize_sbp(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
