module.exports = {
  id: 'kok_in',
  handler: function pluralize_kok_in(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
