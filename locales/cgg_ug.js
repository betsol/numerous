module.exports = {
  id: 'cgg_ug',
  handler: function pluralize_cgg_ug(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
