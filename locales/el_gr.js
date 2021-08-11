module.exports = {
  id: 'el_gr',
  handler: function pluralize_el_gr(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
