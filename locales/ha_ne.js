module.exports = {
  id: 'ha_ne',
  handler: function pluralize_ha_ne(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
