module.exports = {
  id: 'agq_cm',
  handler: function pluralize_agq_cm(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
