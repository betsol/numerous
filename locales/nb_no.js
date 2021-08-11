module.exports = {
  id: 'nb_no',
  handler: function pluralize_nb_no(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
