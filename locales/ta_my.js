module.exports = {
  id: 'ta_my',
  handler: function pluralize_ta_my(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
