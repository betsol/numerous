module.exports = {
  id: 'os_ge',
  handler: function pluralize_os_ge(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
