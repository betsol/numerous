module.exports = {
  id: 'kde_tz',
  handler: function pluralize_kde_tz(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
