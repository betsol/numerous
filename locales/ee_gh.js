module.exports = {
  id: 'ee_gh',
  handler: function pluralize_ee_gh(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
