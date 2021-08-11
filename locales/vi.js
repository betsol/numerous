module.exports = {
  id: 'vi',
  handler: function pluralize_vi(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
