module.exports = {
  id: 'az_cyrl_az',
  handler: function pluralize_az_cyrl_az(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
