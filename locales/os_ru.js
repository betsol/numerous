module.exports = {
  id: 'os_ru',
  handler: function pluralize_os_ru(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
