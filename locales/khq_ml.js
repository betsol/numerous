module.exports = {
  id: 'khq_ml',
  handler: function pluralize_khq_ml(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
