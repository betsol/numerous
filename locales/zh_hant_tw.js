module.exports = {
  id: 'zh_hant_tw',
  handler: function pluralize_zh_hant_tw(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
