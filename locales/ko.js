module.exports = {
  id: 'ko',
  handler: function pluralize_ko(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
