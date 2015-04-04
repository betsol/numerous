var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_cy(n) {
    if (typeof n === "string") n = parseInt(n, 10);
    if (n === 0) return "zero";
    if (n === 1) return "one";
    if (n === 2) return "two";
    if (n === 3) return "few";
    if (n === 6) return "many";
    return "other"
};
numerous.addLocale('cy', pluralize);