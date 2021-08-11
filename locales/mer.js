module.exports = {
  id: 'mer',
  handler: function pluralize_mer(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
