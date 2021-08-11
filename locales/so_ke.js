module.exports = {
  id: 'so_ke',
  handler: function pluralize_so_ke(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
