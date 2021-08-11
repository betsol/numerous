module.exports = {
  id: 'es_sv',
  handler: function pluralize_es_sv(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
