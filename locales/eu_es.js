module.exports = {
  id: 'eu_es',
  handler: function pluralize_eu_es(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
