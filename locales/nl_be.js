var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_nl_be(n) {
    var i = Math.floor(Math.abs(n)),
        v = n.toString().replace(/^[^.]*\.?/, "").length;
    if (typeof n === "string") n = parseInt(n, 10);
    if (i === 1 && v === 0) return "one";
    return "other"
};
numerous.addLocale('nl_be', pluralize);