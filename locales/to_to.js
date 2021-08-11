module.exports = {
  id: 'to_to',
  handler: function pluralize_to_to(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
