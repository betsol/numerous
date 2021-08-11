module.exports = {
  id: 'ebu',
  handler: function pluralize_ebu(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
