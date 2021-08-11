module.exports = {
  id: 'ps_af',
  handler: function pluralize_ps_af(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
