module.exports = {
  id: 'th',
  handler: function pluralize_th(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
