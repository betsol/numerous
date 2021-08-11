module.exports = {
  id: 'mni',
  handler: function pluralize_mni(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
