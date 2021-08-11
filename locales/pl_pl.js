module.exports = {
  id: 'pl_pl',
  handler: function pluralize_pl_pl(val) {
    const n = Number(val),
      i = Math.floor(Math.abs(val)),
      v = val.toString().replace(/^[^.]*\.?/, '').length;
    if (isNaN(n))
      throw Error('n is not a number');
    if (i === 1 && v === 0)
      return 'one';
    if (v === 0 && (i % 10 === Math.floor(i % 10) && (i % 10 >= 2 && i % 10 <= 4) && !(i % 100 >= 12 && i % 100 <= 14)))
      return 'few';
    if (v === 0 && (!(i === 1) && (i % 10 === Math.floor(i % 10) && (i % 10 >= 0 && i % 10 <= 1))) || (v === 0 && (i % 10 === Math.floor(i % 10) && (i % 10 >= 5 && i % 10 <= 9)) || v === 0 && (i % 100 === Math.floor(i % 100) && (i % 100 >= 12 && i % 100 <= 14))))
      return 'many';
    return 'other';
  }
};
