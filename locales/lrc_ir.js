module.exports = {
  id: 'lrc_ir',
  handler: function pluralize_lrc_ir(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
