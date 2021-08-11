module.exports = {
  id: 'nus',
  handler: function pluralize_nus(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
