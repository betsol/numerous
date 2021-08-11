module.exports = {
  id: 'wo',
  handler: function pluralize_wo(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
