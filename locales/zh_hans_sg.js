module.exports = {
  id: 'zh_hans_sg',
  handler: function pluralize_zh_hans_sg(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
