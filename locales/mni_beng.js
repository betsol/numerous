module.exports = {
  id: 'mni_beng',
  handler: function pluralize_mni_beng(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
