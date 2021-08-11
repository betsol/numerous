module.exports = {
  id: 'sg',
  handler: function pluralize_sg(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
