module.exports = {
  id: 'ne_np',
  handler: function pluralize_ne_np(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
