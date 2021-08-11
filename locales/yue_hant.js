module.exports = {
  id: 'yue_hant',
  handler: function pluralize_yue_hant(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
