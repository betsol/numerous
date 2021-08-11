module.exports = {
  id: 'gv',
  handler: function pluralize_gv(val) {
    const n = Number(val),
      i = Math.floor(Math.abs(val)),
      v = val.toString().replace(/^[^.]*\.?/, '').length;
    if (isNaN(n))
      throw Error('n is not a number');
    if (v === 0 && i % 10 === 1)
      return 'one';
    if (v === 0 && i % 10 === 2)
      return 'two';
    if (v === 0 && (i % 100 === 0 || (i % 100 === 20 || (i % 100 === 40 || (i % 100 === 60 || i % 100 === 80)))))
      return 'few';
    if (!(v === 0))
      return 'many';
    return 'other';
  }
};
