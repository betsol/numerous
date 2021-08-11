module.exports = {
  id: 'cs',
  handler: function pluralize_cs(val) {
    const n = Number(val),
      i = Math.floor(Math.abs(val)),
      v = val.toString().replace(/^[^.]*\.?/, '').length;
    if (isNaN(n))
      throw Error('n is not a number');
    if (i === 1 && v === 0)
      return 'one';
    if (i === Math.floor(i) && (i >= 2 && i <= 4) && v === 0)
      return 'few';
    if (!(v === 0))
      return 'many';
    return 'other';
  }
};
