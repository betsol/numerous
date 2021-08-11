module.exports = {
  id: 'tt_ru',
  handler: function pluralize_tt_ru(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
