var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_lv_lv(n) {
    var v = n.toString().replace(/^[^.]*\.?/, "").length,
        f = parseInt(n.toString().replace(/^[^.]*\.?/, ""), 10) || 0;
    if (typeof n === "string") n = parseInt(n, 10);
    if (n % 10 === 0 || n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 19 || v === 2 && f % 100 === Math.floor(f % 100) && f % 100 >= 11 && f % 100 <= 19) return "zero";
    if (n % 10 === 1 && (!(n % 100 === 11) || v === 2 && f % 10 === 1 && (!(f % 100 === 11) || !(v === 2) && f % 10 === 1))) return "one";
    return "other"
};
numerous.addLocale('lv_lv', pluralize);