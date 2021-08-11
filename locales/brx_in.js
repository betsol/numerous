module.exports = {
  id: 'brx_in',
  handler: function pluralize_brx_in(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
