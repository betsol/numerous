var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_sl_si(n) {
    var i = Math.floor(Math.abs(n)),
        v = n.toString().replace(/^[^.]*\.?/, "").length;
    if (typeof n === "string") n = parseInt(n, 10);
    if (v === 0 && i % 100 === 1) return "one";
    if (v === 0 && i % 100 === 2) return "two";
    if (v === 0 && (i % 100 === Math.floor(i % 100) && i % 100 >= 3 && i % 100 <= 4 || !(v === 0))) return "few";
    return "other"
};
numerous.addLocale('sl_si', pluralize);