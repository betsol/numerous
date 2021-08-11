module.exports = {
  id: 'af_na',
  handler: function pluralize_af_na(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
