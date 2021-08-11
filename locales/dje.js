module.exports = {
  id: 'dje',
  handler: function pluralize_dje(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
