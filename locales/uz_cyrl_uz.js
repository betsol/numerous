module.exports = {
  id: 'uz_cyrl_uz',
  handler: function pluralize_uz_cyrl_uz(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
