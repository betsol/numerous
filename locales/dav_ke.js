module.exports = {
  id: 'dav_ke',
  handler: function pluralize_dav_ke(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
