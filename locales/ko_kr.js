module.exports = {
  id: 'ko_kr',
  handler: function pluralize_ko_kr(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
