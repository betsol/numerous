module.exports = {
  id: 'om_et',
  handler: function pluralize_om_et(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
