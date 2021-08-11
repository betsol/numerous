module.exports = {
  id: 'eo_001',
  handler: function pluralize_eo_001(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
