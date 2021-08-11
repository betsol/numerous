module.exports = {
  id: 'qu_pe',
  handler: function pluralize_qu_pe(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
