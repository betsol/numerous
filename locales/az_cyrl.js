module.exports = {
  id: 'az_cyrl',
  handler: function pluralize_az_cyrl(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
