module.exports = {
  id: 'rw_rw',
  handler: function pluralize_rw_rw(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
