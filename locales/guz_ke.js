module.exports = {
  id: 'guz_ke',
  handler: function pluralize_guz_ke(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
