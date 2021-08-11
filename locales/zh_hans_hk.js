module.exports = {
  id: 'zh_hans_hk',
  handler: function pluralize_zh_hans_hk(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
