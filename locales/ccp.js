module.exports = {
  id: 'ccp',
  handler: function pluralize_ccp(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
