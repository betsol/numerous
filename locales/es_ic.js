module.exports = {
  id: 'es_ic',
  handler: function pluralize_es_ic(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
