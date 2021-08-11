module.exports = {
  id: 'tr_tr',
  handler: function pluralize_tr_tr(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
