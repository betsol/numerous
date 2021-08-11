module.exports = {
  id: 'shi',
  handler: function pluralize_shi(val) {
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
