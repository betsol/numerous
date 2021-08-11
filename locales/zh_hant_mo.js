module.exports = {
  id: 'zh_hant_mo',
  handler: function pluralize_zh_hant_mo(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
