module.exports = {
  id: 'mk_mk',
  handler: function pluralize_mk_mk(val) {
    const n = Number(val),
      i = Math.floor(Math.abs(val)),
      v = val.toString().replace(/^[^.]*\.?/, '').length,
      f = parseInt(val.toString().replace(/^[^.]*\.?/, ''), 10) || 0;
    if (isNaN(n))
      throw Error('n is not a number');
    if (v === 0 && (i % 10 === 1 && !(i % 100 === 11)) || f % 10 === 1 && !(f % 100 === 11))
      return 'one';
    return 'other';
  }
};
