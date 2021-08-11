module.exports = {
  id: 'mzn_ir',
  handler: function pluralize_mzn_ir(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
