module.exports = {
  id: 'lu_cd',
  handler: function pluralize_lu_cd(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
