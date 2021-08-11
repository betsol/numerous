module.exports = {
  id: 'wo_sn',
  handler: function pluralize_wo_sn(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
