module.exports = {
  id: 'kw_gb',
  handler: function pluralize_kw_gb(val) {
    const n = Number(val);
    if (isNaN(n))
      throw Error('n is not a number');
    if (n === 0)
      return 'zero';
    if (n === 1)
      return 'one';
    if (n % 100 === 2 || (n % 100 === 22 || (n % 100 === 42 || (n % 100 === 62 || n % 100 === 82))) || (n % 1000 === 0 && (n % 100000 === Math.floor(n % 100000) && (n % 100000 >= 1000 && n % 100000 <= 20000 || (n % 100000 === 40000 || (n % 100000 === 60000 || n % 100000 === 80000)))) || !(n === 0) && n % 1000000 === 100000))
      return 'two';
    if (n % 100 === 3 || (n % 100 === 23 || (n % 100 === 43 || (n % 100 === 63 || n % 100 === 83))))
      return 'few';
    if (!(n === 1) && (n % 100 === 1 || (n % 100 === 21 || (n % 100 === 41 || (n % 100 === 61 || n % 100 === 81)))))
      return 'many';
    return 'other';
  }
};
