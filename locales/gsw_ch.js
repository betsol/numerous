module.exports = {
  id: 'gsw_ch',
  handler: function pluralize_gsw_ch(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
