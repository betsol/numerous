module.exports = {
  id: 'pa_arab_pk',
  handler: function pluralize_pa_arab_pk(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
