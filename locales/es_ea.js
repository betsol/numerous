module.exports = {
  id: 'es_ea',
  handler: function pluralize_es_ea(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
