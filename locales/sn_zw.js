module.exports = {
  id: 'sn_zw',
  handler: function pluralize_sn_zw(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
