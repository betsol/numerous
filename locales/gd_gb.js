var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_gd_gb(n) {
    if (typeof n === "string") n = parseInt(n, 10);
    if (n === 1 || n === 11) return "one";
    if (n === 2 || n === 12) return "two";
    if (n === Math.floor(n) && (n >= 3 && n <= 10 || n >= 13 && n <= 19)) return "few";
    return "other"
};
numerous.addLocale('gd_gb', pluralize);