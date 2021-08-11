module.exports = {
  id: 'lkt',
  handler: function pluralize_lkt(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
