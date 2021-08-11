module.exports = {
  id: 'vai_vaii_lr',
  handler: function pluralize_vai_vaii_lr(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
