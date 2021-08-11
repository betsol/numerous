module.exports = {
  id: 'ig_ng',
  handler: function pluralize_ig_ng(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
