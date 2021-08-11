module.exports = {
  id: 'yue_hans',
  handler: function pluralize_yue_hans(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
