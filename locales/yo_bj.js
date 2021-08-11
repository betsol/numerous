module.exports = {
  id: 'yo_bj',
  handler: function pluralize_yo_bj(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
