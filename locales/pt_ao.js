var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_pt_ao(n) {
    var i = Math.floor(Math.abs(n)),
        v = n.toString().replace(/^[^.]*\.?/, "").length,
        t = parseInt(n.toString().replace(/^[^.]*\.?|0+$/g, ""), 10) || 0;
    if (typeof n === "string") n = parseInt(n, 10);
    if (i === 1 && (v === 0 || i === 0 && t === 1)) return "one";
    return "other"
};
numerous.addLocale('pt_ao', pluralize);