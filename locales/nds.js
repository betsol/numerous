module.exports = {
  id: 'nds',
  handler: function pluralize_nds(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
