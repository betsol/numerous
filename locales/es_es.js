module.exports = {
  id: 'es_es',
  handler: function pluralize_es_es(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
