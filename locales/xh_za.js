module.exports = {
  id: 'xh_za',
  handler: function pluralize_xh_za(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
