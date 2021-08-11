module.exports = {
  id: 'shi_tfng',
  handler: function pluralize_shi_tfng(val) {
    const n = Number(val),
      i = Math.floor(Math.abs(val));
    if (isNaN(n))
      throw Error('n is not a number');
    if (i === 0 || n === 1)
      return 'one';
    if (n === Math.floor(n) && (n >= 2 && n <= 10))
      return 'few';
    return 'other';
  }
};
