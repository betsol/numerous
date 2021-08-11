module.exports = {
  id: 'lu',
  handler: function pluralize_lu(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
