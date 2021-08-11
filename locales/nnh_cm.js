module.exports = {
  id: 'nnh_cm',
  handler: function pluralize_nnh_cm(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
