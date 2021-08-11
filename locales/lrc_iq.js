module.exports = {
  id: 'lrc_iq',
  handler: function pluralize_lrc_iq(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
