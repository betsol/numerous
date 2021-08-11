module.exports = {
  id: 'ksf_cm',
  handler: function pluralize_ksf_cm(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
