module.exports = {
  id: 'to',
  handler: function pluralize_to(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
