module.exports = {
  id: 'sbp_tz',
  handler: function pluralize_sbp_tz(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
