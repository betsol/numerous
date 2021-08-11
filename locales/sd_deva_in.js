module.exports = {
  id: 'sd_deva_in',
  handler: function pluralize_sd_deva_in(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
