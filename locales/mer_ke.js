module.exports = {
  id: 'mer_ke',
  handler: function pluralize_mer_ke(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
