var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_kw(n) {
    if (typeof n === "string") n = parseInt(n, 10);
    if (n === 1) return "one";
    if (n === 2) return "two";
    return "other"
};
numerous.addLocale('kw', pluralize);