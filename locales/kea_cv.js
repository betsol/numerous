module.exports = {
  id: 'kea_cv',
  handler: function pluralize_kea_cv(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
