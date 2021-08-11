module.exports = {
  id: 'sah',
  handler: function pluralize_sah(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
