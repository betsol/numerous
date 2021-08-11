module.exports = {
  id: 'ko_kp',
  handler: function pluralize_ko_kp(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
