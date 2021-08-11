module.exports = {
  id: 'seh_mz',
  handler: function pluralize_seh_mz(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
