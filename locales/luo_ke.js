module.exports = {
  id: 'luo_ke',
  handler: function pluralize_luo_ke(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
