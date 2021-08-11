module.exports = {
  id: 'bas',
  handler: function pluralize_bas(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
