module.exports = {
  id: 'uz_arab',
  handler: function pluralize_uz_arab(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
