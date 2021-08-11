module.exports = {
  id: 'ja_jp',
  handler: function pluralize_ja_jp(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
