module.exports = {
  id: 'yav_cm',
  handler: function pluralize_yav_cm(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
