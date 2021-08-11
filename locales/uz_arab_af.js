module.exports = {
  id: 'uz_arab_af',
  handler: function pluralize_uz_arab_af(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
