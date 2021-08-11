module.exports = {
  id: 'tg_tj',
  handler: function pluralize_tg_tj(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
