module.exports = {
  id: 'mn_mn',
  handler: function pluralize_mn_mn(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
