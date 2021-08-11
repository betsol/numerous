module.exports = {
  id: 'bo',
  handler: function pluralize_bo(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
