module.exports = {
  id: 'sr_latn_ba',
  handler: function pluralize_sr_latn_ba(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
