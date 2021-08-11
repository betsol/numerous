module.exports = {
  id: 'nmg',
  handler: function pluralize_nmg(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
