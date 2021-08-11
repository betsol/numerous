module.exports = {
  id: 'lb_lu',
  handler: function pluralize_lb_lu(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
