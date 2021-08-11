module.exports = {
  id: 'my_mm',
  handler: function pluralize_my_mm(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
