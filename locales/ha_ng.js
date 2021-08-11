module.exports = {
  id: 'ha_ng',
  handler: function pluralize_ha_ng(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
