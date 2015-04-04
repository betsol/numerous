var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_mk_mk(n) {
    var i = Math.floor(Math.abs(n)),
        v = n.toString().replace(/^[^.]*\.?/, "").length,
        f = parseInt(n.toString().replace(/^[^.]*\.?/, ""), 10) || 0;
    if (typeof n === "string") n = parseInt(n, 10);
    if (v === 0 && (i % 10 === 1 || f % 10 === 1)) return "one";
    return "other"
};
numerous.addLocale('mk_mk', pluralize);