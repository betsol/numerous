module.exports = {
  id: 'es_do',
  handler: function pluralize_es_do(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
