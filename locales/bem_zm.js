module.exports = {
  id: 'bem_zm',
  handler: function pluralize_bem_zm(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
