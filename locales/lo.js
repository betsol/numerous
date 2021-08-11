module.exports = {
  id: 'lo',
  handler: function pluralize_lo(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
