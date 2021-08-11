module.exports = {
  id: 'dz_bt',
  handler: function pluralize_dz_bt(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
