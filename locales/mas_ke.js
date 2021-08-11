module.exports = {
  id: 'mas_ke',
  handler: function pluralize_mas_ke(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
