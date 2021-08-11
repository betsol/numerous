module.exports = {
  id: 'da',
  handler: function pluralize_da(val) {
    const n = Number(val),
      i = Math.floor(Math.abs(val)),
      t = parseInt(val.toString().replace(/^[^.]*\.?|0+$/g, ''), 10) || 0;
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1 || !(t === 0) && (i === 0 || i === 1))
      return 'one';
    return 'other';
  }
};
