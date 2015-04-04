var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_sr_cyrl(n) {
    var i = Math.floor(Math.abs(n)),
        v = n.toString().replace(/^[^.]*\.?/, "").length,
        f = parseInt(n.toString().replace(/^[^.]*\.?/, ""), 10) || 0;
    if (typeof n === "string") n = parseInt(n, 10);
    if (v === 0 && i % 10 === 1 && (!(i % 100 === 11) || f % 10 === 1 && !(f % 100 === 11))) return "one";
    if (v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 && (!(i % 100 >= 12 && i % 100 <= 14) || f % 10 === Math.floor(f % 10) && f % 10 >= 2 && f % 10 <= 4 && !(f % 100 >= 12 && f % 100 <= 14))) return "few";
    return "other"
};
numerous.addLocale('sr_cyrl', pluralize);