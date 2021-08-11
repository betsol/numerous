module.exports = {
  id: 'id_id',
  handler: function pluralize_id_id(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    return 'other';
  }
};
