module.exports = {
  id: 'ses_ml',
  handler: function pluralize_ses_ml(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
