module.exports = {
  id: 'nb_sj',
  handler: function pluralize_nb_sj(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
