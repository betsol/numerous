module.exports = {
  id: 'pa_arab',
  handler: function pluralize_pa_arab(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
