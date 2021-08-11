module.exports = {
  id: 'sd_deva',
  handler: function pluralize_sd_deva(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
