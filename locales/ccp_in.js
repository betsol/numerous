module.exports = {
  id: 'ccp_in',
  handler: function pluralize_ccp_in(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
