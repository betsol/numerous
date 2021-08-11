module.exports = {
  id: 'ebu_ke',
  handler: function pluralize_ebu_ke(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
