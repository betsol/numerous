module.exports = {
  id: 'yue',
  handler: function pluralize_yue(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
