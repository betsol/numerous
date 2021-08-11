module.exports = {
  id: 'ki',
  handler: function pluralize_ki(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
