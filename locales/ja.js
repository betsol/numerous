module.exports = {
  id: 'ja',
  handler: function pluralize_ja(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
