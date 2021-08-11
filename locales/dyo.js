module.exports = {
  id: 'dyo',
  handler: function pluralize_dyo(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
