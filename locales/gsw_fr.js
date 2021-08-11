module.exports = {
  id: 'gsw_fr',
  handler: function pluralize_gsw_fr(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
