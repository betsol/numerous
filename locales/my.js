module.exports = {
  id: 'my',
  handler: function pluralize_my(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
