module.exports = {
  id: 'es_pa',
  handler: function pluralize_es_pa(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
