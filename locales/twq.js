module.exports = {
  id: 'twq',
  handler: function pluralize_twq(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
