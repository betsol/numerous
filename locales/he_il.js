module.exports = {
  id: 'he_il',
  handler: function pluralize_he_il(val) {
    const n = Number(val),
      i = Math.floor(Math.abs(val)),
      v = val.toString().replace(/^[^.]*\.?/, '').length;
    if (isNaN(n))
      throw Error('n is not a number');
    if (i === 1 && v === 0)
      return 'one';
    if (i === 2 && v === 0)
      return 'two';
    if (v === 0 && (!(n >= 0 && n <= 10) && n % 10 === 0))
      return 'many';
    return 'other';
  }
};
