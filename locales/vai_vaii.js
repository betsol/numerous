module.exports = {
  id: 'vai_vaii',
  handler: function pluralize_vai_vaii(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
