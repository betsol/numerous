module.exports = {
  id: 'fo_dk',
  handler: function pluralize_fo_dk(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
