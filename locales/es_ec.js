module.exports = {
  id: 'es_ec',
  handler: function pluralize_es_ec(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
