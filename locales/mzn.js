module.exports = {
  id: 'mzn',
  handler: function pluralize_mzn(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
