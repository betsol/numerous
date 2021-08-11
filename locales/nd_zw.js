module.exports = {
  id: 'nd_zw',
  handler: function pluralize_nd_zw(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
