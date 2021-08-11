module.exports = {
  id: 'ug_cn',
  handler: function pluralize_ug_cn(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
