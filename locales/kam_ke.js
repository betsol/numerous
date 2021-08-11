module.exports = {
  id: 'kam_ke',
  handler: function pluralize_kam_ke(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
