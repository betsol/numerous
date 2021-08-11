module.exports = {
  id: 'vun_tz',
  handler: function pluralize_vun_tz(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
