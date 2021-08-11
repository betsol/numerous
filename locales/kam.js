module.exports = {
  id: 'kam',
  handler: function pluralize_kam(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
