module.exports = {
  id: 'bs_latn_ba',
  handler: function pluralize_bs_latn_ba(val) {
    const n = Number(val),
      i = Math.floor(Math.abs(val)),
      v = val.toString().replace(/^[^.]*\.?/, '').length,
      f = parseInt(val.toString().replace(/^[^.]*\.?/, ''), 10) || 0;
    if (isNaN(n))
      throw Error('n is not a number');
    if (v === 0 && (i % 10 === 1 && !(i % 100 === 11)) || f % 10 === 1 && !(f % 100 === 11))
      return 'one';
    if (v === 0 && (i % 10 === Math.floor(i % 10) && (i % 10 >= 2 && i % 10 <= 4) && !(i % 100 >= 12 && i % 100 <= 14)) || f % 10 === Math.floor(f % 10) && (f % 10 >= 2 && f % 10 <= 4) && !(f % 100 >= 12 && f % 100 <= 14))
      return 'few';
    return 'other';
  }
};
