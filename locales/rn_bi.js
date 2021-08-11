module.exports = {
  id: 'rn_bi',
  handler: function pluralize_rn_bi(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
