module.exports = {
  id: 'ro_md',
  handler: function pluralize_ro_md(val) {
    const n = Number(val),
      i = Math.floor(Math.abs(val)),
      v = val.toString().replace(/^[^.]*\.?/, '').length;
    if (isNaN(n))
      throw Error('n is not a number');
    if (i === 1 && v === 0)
      return 'one';
    if (!(v === 0) || (n === 0 || n % 100 === Math.floor(n % 100) && (n % 100 >= 2 && n % 100 <= 19)))
      return 'few';
    return 'other';
  }
};
