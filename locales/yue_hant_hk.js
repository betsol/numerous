module.exports = {
  id: 'yue_hant_hk',
  handler: function pluralize_yue_hant_hk(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
