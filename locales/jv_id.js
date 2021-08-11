module.exports = {
  id: 'jv_id',
  handler: function pluralize_jv_id(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
