module.exports = {
  id: 'lg_ug',
  handler: function pluralize_lg_ug(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
