module.exports = {
  id: 'dyo_sn',
  handler: function pluralize_dyo_sn(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
