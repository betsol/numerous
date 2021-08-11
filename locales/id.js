module.exports = {
  id: 'id',
  handler: function pluralize_id(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
