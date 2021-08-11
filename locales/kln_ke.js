module.exports = {
  id: 'kln_ke',
  handler: function pluralize_kln_ke(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
