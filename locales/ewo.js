module.exports = {
  id: 'ewo',
  handler: function pluralize_ewo(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
