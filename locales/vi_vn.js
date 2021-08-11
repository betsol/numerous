module.exports = {
  id: 'vi_vn',
  handler: function pluralize_vi_vn(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
