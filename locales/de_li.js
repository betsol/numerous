var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_de_li(n) {
    var i = Math.floor(Math.abs(n)),
        v = n.toString().replace(/^[^.]*\.?/, "").length;
    if (typeof n === "string") n = parseInt(n, 10);
    if (i === 1 && v === 0) return "one";
    return "other"
};
numerous.addLocale('de_li', pluralize);