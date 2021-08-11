module.exports = {
  id: 'luo',
  handler: function pluralize_luo(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
