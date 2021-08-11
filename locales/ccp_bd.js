module.exports = {
  id: 'ccp_bd',
  handler: function pluralize_ccp_bd(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
