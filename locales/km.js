module.exports = {
  id: 'km',
  handler: function pluralize_km(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
