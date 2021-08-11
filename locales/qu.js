module.exports = {
  id: 'qu',
  handler: function pluralize_qu(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
