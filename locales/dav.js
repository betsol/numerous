module.exports = {
  id: 'dav',
  handler: function pluralize_dav(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
