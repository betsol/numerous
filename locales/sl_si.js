module.exports = {
  id: 'sl_si',
  handler: function pluralize_sl_si(val) {
    const n = Number(val),
      i = Math.floor(Math.abs(val)),
      v = val.toString().replace(/^[^.]*\.?/, '').length;
    if (isNaN(n))
      throw Error('n is not a number');
    if (v === 0 && i % 100 === 1)
      return 'one';
    if (v === 0 && i % 100 === 2)
      return 'two';
    if (v === 0 && (i % 100 === Math.floor(i % 100) && (i % 100 >= 3 && i % 100 <= 4)) || !(v === 0))
      return 'few';
    return 'other';
  }
};
