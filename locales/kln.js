module.exports = {
  id: 'kln',
  handler: function pluralize_kln(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
