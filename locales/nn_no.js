module.exports = {
  id: 'nn_no',
  handler: function pluralize_nn_no(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 1)
      return 'one';
    return 'other';
  }
};
