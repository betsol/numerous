module.exports = {
  id: 'yo_ng',
  handler: function pluralize_yo_ng(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
