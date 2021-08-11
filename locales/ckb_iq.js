module.exports = {
  id: 'ckb_iq',
  handler: function pluralize_ckb_iq(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
