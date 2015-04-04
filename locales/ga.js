var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_ga(n) {
    if (typeof n === "string") n = parseInt(n, 10);
    if (n === 1) return "one";
    if (n === 2) return "two";
    if (n === Math.floor(n) && n >= 3 && n <= 6) return "few";
    if (n === Math.floor(n) && n >= 7 && n <= 10) return "many";
    return "other"
};
numerous.addLocale('ga', pluralize);