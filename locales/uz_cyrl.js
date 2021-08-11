module.exports = {
  id: 'uz_cyrl',
  handler: function pluralize_uz_cyrl(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
