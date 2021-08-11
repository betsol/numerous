module.exports = {
  id: 'luy_ke',
  handler: function pluralize_luy_ke(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
