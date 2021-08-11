module.exports = {
  id: 'bg_bg',
  handler: function pluralize_bg_bg(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
