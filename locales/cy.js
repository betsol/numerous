module.exports = {
  id: 'cy',
  handler: function pluralize_cy(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 0)
      return 'zero';
    if (n === 1)
      return 'one';
    if (n === 2)
      return 'two';
    if (n === 3)
      return 'few';
    if (n === 6)
      return 'many';
    return 'other';
  }
};
