module.exports = {
  id: 'nds_de',
  handler: function pluralize_nds_de(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
