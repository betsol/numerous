module.exports = {
  id: 'zh_hans_cn',
  handler: function pluralize_zh_hans_cn(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
