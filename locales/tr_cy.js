module.exports = {
  id: 'tr_cy',
  handler: function pluralize_tr_cy(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
