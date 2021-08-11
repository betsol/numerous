module.exports = {
  id: 'ky_kg',
  handler: function pluralize_ky_kg(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
