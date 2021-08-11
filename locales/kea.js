module.exports = {
  id: 'kea',
  handler: function pluralize_kea(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
