module.exports = {
  id: 'ti_er',
  handler: function pluralize_ti_er(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === Math.floor(n) && (n >= 0 && n <= 1))
      return 'one';
    return 'other';
  }
};
