module.exports = {
  id: 'sd_arab_pk',
  handler: function pluralize_sd_arab_pk(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
