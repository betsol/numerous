module.exports = {
  id: 'sg_cf',
  handler: function pluralize_sg_cf(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
