module.exports = {
  id: 'sq_al',
  handler: function pluralize_sq_al(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
