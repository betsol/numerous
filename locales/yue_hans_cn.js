module.exports = {
  id: 'yue_hans_cn',
  handler: function pluralize_yue_hans_cn(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
