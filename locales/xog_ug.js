module.exports = {
  id: 'xog_ug',
  handler: function pluralize_xog_ug(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
