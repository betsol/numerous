module.exports = {
  id: 'zgh',
  handler: function pluralize_zgh(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
