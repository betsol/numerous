module.exports = {
  id: 'fil',
  handler: function pluralize_fil(val) {
    const n = Number(val),
      i = Math.floor(Math.abs(val)),
      v = val.toString().replace(/^[^.]*\.?/, '').length,
      f = parseInt(val.toString().replace(/^[^.]*\.?/, ''), 10) || 0;
    if (isNaN(n))
      throw Error('n is not a number');
    if (v === 0 && (i === 1 || (i === 2 || i === 3)) || (v === 0 && !(i % 10 === 4 || (i % 10 === 6 || i % 10 === 9)) || !(v === 0) && !(f % 10 === 4 || (f % 10 === 6 || f % 10 === 9))))
      return 'one';
    return 'other';
  }
};
