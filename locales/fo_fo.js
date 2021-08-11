module.exports = {
  id: 'fo_fo',
  handler: function pluralize_fo_fo(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
