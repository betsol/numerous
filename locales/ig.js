module.exports = {
  id: 'ig',
  handler: function pluralize_ig(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
