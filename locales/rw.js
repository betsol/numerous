module.exports = {
  id: 'rw',
  handler: function pluralize_rw(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
