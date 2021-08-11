module.exports = {
  id: 'vai',
  handler: function pluralize_vai(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
