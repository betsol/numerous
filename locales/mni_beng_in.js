module.exports = {
  id: 'mni_beng_in',
  handler: function pluralize_mni_beng_in(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
