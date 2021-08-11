module.exports = {
  id: 'dsb_de',
  handler: function pluralize_dsb_de(val) {
    const n = Number(val),
      i = Math.floor(Math.abs(val)),
      v = val.toString().replace(/^[^.]*\.?/, '').length,
      f = parseInt(val.toString().replace(/^[^.]*\.?/, ''), 10) || 0;
    if (isNaN(n))
      throw Error('n is not a number');
    if (v === 0 && i % 100 === 1 || f % 100 === 1)
      return 'one';
    if (v === 0 && i % 100 === 2 || f % 100 === 2)
      return 'two';
    if (v === 0 && (i % 100 === Math.floor(i % 100) && (i % 100 >= 3 && i % 100 <= 4)) || f % 100 === Math.floor(f % 100) && (f % 100 >= 3 && f % 100 <= 4))
      return 'few';
    return 'other';
  }
};
