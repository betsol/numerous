module.exports = {
  id: 'nds_nl',
  handler: function pluralize_nds_nl(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
