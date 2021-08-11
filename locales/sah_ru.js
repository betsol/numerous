module.exports = {
  id: 'sah_ru',
  handler: function pluralize_sah_ru(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
