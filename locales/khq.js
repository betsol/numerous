module.exports = {
  id: 'khq',
  handler: function pluralize_khq(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
