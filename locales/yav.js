module.exports = {
  id: 'yav',
  handler: function pluralize_yav(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
