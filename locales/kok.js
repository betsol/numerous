module.exports = {
  id: 'kok',
  handler: function pluralize_kok(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
