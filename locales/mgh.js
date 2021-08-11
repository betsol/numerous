module.exports = {
  id: 'mgh',
  handler: function pluralize_mgh(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
