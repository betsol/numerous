module.exports = {
  id: 'el_cy',
  handler: function pluralize_el_cy(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
