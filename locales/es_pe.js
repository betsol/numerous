module.exports = {
  id: 'es_pe',
  handler: function pluralize_es_pe(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
