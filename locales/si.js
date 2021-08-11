module.exports = {
  id: 'si',
  handler: function pluralize_si(val) {
    const n = Number(val),
      i = Math.floor(Math.abs(val)),
      f = parseInt(val.toString().replace(/^[^.]*\.?/, ''), 10) || 0;
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 0 || n === 1 || i === 0 && f === 1)
      return 'one';
    return 'other';
  }
};
