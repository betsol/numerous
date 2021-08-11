module.exports = {
  id: 'sq_mk',
  handler: function pluralize_sq_mk(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
