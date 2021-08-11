module.exports = {
  id: 'sd_arab',
  handler: function pluralize_sd_arab(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
