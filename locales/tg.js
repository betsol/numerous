module.exports = {
  id: 'tg',
  handler: function pluralize_tg(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
