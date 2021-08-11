module.exports = {
  id: 'root',
  handler: function pluralize_root(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
