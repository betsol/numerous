module.exports = {
  id: 'mua',
  handler: function pluralize_mua(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
