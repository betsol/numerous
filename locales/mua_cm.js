module.exports = {
  id: 'mua_cm',
  handler: function pluralize_mua_cm(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
