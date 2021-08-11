module.exports = {
  id: 'nus_ss',
  handler: function pluralize_nus_ss(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
