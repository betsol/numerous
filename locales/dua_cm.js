module.exports = {
  id: 'dua_cm',
  handler: function pluralize_dua_cm(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
