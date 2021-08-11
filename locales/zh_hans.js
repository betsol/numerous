module.exports = {
  id: 'zh_hans',
  handler: function pluralize_zh_hans(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
