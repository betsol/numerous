module.exports = {
  id: 'ki_ke',
  handler: function pluralize_ki_ke(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
