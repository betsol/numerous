module.exports = {
  id: 'su_latn_id',
  handler: function pluralize_su_latn_id(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
