module.exports = {
  id: 'gsw_li',
  handler: function pluralize_gsw_li(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
