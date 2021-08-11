module.exports = {
  id: 'ii_cn',
  handler: function pluralize_ii_cn(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
