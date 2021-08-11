module.exports = {
  id: 'zh',
  handler: function pluralize_zh(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
