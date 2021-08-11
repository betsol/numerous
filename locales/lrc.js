module.exports = {
  id: 'lrc',
  handler: function pluralize_lrc(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
