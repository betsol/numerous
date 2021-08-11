module.exports = {
  id: 'pcm_ng',
  handler: function pluralize_pcm_ng(val) {
    const n = Number(val),
      i = Math.floor(Math.abs(val));
    if (isNaN(n))
      throw Error('n is not a number');
    if (i === 0 || n === 1)
      return 'one';
    return 'other';
  }
};
