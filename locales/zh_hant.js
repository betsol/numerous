module.exports = {
  id: 'zh_hant',
  handler: function pluralize_zh_hant(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
