module.exports = {
  id: 'lag_tz',
  handler: function pluralize_lag_tz(val) {
    const n = Number(val),
      i = Math.floor(Math.abs(val));
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 0)
      return 'zero';
    if ((i === 0 || i === 1) && !(n === 0))
      return 'one';
    return 'other';
  }
};
