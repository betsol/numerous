module.exports = {
  id: 'ce_ru',
  handler: function pluralize_ce_ru(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
