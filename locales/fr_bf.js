module.exports = {
  id: 'fr_bf',
  handler: function pluralize_fr_bf(val) {
    const n = Number(val),
      i = Math.floor(Math.abs(val)),
      v = val.toString().replace(/^[^.]*\.?/, '').length,
      e = parseInt(val.toString().replace(/^[^e]*(e([-+]?\d+))?/, '$2')) || 0;
    if (isNaN(n))
      throw Error('n is not a number');
    if (i === 0 || i === 1)
      return 'one';
    if (e === 0 && (!(i === 0) && (i % 1000000 === 0 && v === 0)) || !(e >= 0 && e <= 5))
      return 'many';
    return 'other';
  }
};
