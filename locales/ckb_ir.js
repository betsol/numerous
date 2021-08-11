module.exports = {
  id: 'ckb_ir',
  handler: function pluralize_ckb_ir(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
