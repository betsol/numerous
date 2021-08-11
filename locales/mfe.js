module.exports = {
  id: 'mfe',
  handler: function pluralize_mfe(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
