module.exports = {
  id: 'jv',
  handler: function pluralize_jv(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
