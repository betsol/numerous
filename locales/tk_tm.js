module.exports = {
  id: 'tk_tm',
  handler: function pluralize_tk_tm(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
