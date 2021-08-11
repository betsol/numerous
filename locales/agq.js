module.exports = {
  id: 'agq',
  handler: function pluralize_agq(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
