var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_si_lk(n) {
    var i = Math.floor(Math.abs(n)),
        f = parseInt(n.toString().replace(/^[^.]*\.?/, ""), 10) || 0;
    if (typeof n === "string") n = parseInt(n, 10);
    if (n === 0 || n === 1 || i === 0 && f === 1) return "one";
    return "other"
};
numerous.addLocale('si_lk', pluralize);