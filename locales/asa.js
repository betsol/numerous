module.exports = {
  id: 'asa',
  handler: function pluralize_asa(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
