module.exports = {
  id: 'nmg_cm',
  handler: function pluralize_nmg_cm(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
