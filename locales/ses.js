module.exports = {
  id: 'ses',
  handler: function pluralize_ses(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
