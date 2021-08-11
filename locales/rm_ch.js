module.exports = {
  id: 'rm_ch',
  handler: function pluralize_rm_ch(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
