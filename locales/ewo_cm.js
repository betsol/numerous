module.exports = {
  id: 'ewo_cm',
  handler: function pluralize_ewo_cm(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
