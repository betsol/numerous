module.exports = {
  id: 'lv_lv',
  handler: function pluralize_lv_lv(val) {
    const n = Number(val),
      v = val.toString().replace(/^[^.]*\.?/, '').length,
      f = parseInt(val.toString().replace(/^[^.]*\.?/, ''), 10) || 0;
    if (isNaN(n))
      throw Error('n is not a number');
    if (n % 10 === 0 || (n % 100 === Math.floor(n % 100) && (n % 100 >= 11 && n % 100 <= 19) || v === 2 && (f % 100 === Math.floor(f % 100) && (f % 100 >= 11 && f % 100 <= 19))))
      return 'zero';
    if (n % 10 === 1 && !(n % 100 === 11) || (v === 2 && (f % 10 === 1 && !(f % 100 === 11)) || !(v === 2) && f % 10 === 1))
      return 'one';
    return 'other';
  }
};
