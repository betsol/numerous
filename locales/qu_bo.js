module.exports = {
  id: 'qu_bo',
  handler: function pluralize_qu_bo(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
