module.exports = {
  id: 'es_ar',
  handler: function pluralize_es_ar(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
