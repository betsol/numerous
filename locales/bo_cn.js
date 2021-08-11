module.exports = {
  id: 'bo_cn',
  handler: function pluralize_bo_cn(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
