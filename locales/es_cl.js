module.exports = {
  id: 'es_cl',
  handler: function pluralize_es_cl(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
