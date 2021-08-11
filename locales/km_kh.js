module.exports = {
  id: 'km_kh',
  handler: function pluralize_km_kh(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
