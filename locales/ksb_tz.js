module.exports = {
  id: 'ksb_tz',
  handler: function pluralize_ksb_tz(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
