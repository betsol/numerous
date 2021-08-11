module.exports = {
  id: 'bo_in',
  handler: function pluralize_bo_in(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
