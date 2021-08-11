module.exports = {
  id: 'ee_tg',
  handler: function pluralize_ee_tg(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
