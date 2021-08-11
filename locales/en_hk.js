module.exports = {
  id: 'en_hk',
  handler: function pluralize_en_hk(val) {
    const n = Number(val),
      i = Math.floor(Math.abs(val)),
      v = val.toString().replace(/^[^.]*\.?/, '').length;
    if (isNaN(n))
      throw Error('n is not a number');
    if (i === 1 && v === 0)
      return 'one';
    return 'other';
  }
};
