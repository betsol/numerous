module.exports = {
  id: 'nyn_ug',
  handler: function pluralize_nyn_ug(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
