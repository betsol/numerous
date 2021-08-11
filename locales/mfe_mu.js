module.exports = {
  id: 'mfe_mu',
  handler: function pluralize_mfe_mu(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
