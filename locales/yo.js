module.exports = {
  id: 'yo',
  handler: function pluralize_yo(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
