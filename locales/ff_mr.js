var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_ff_mr(n) {
    var i = Math.floor(Math.abs(n));
    if (typeof n === "string") n = parseInt(n, 10);
    if (i === 0 || i === 1) return "one";
    return "other"
};
numerous.addLocale('ff_mr', pluralize);