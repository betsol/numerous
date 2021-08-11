module.exports = {
  id: 'is',
  handler: function pluralize_is(val) {
    const n = Number(val),
      i = Math.floor(Math.abs(val)),
      t = parseInt(val.toString().replace(/^[^.]*\.?|0+$/g, ''), 10) || 0;
    if (isNaN(n))
      throw Error('n is not a number');
    if (t === 0 && (i % 10 === 1 && !(i % 100 === 11)) || !(t === 0))
      return 'one';
    return 'other';
  }
};
